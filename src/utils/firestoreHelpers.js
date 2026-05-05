// src/utils/firestoreHelpers.js

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { demoPosts } from "../data/demoData";

export async function getPosts({
  category = "",
  userId = "",
  limitDemo = false,
} = {}) {
  let q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

  if (category) {
    q = query(
      collection(db, "posts"),
      where("category", "==", category),
      orderBy("createdAt", "desc")
    );
  }

  if (userId) {
    q = query(
      collection(db, "posts"),
      where("authorId", "==", userId),
      orderBy("createdAt", "desc")
    );
  }

  const snap = await getDocs(q);
  const firebasePosts = snap.docs.map((d) => ({ id: d.id, ...d.data() }));

  if (!limitDemo) {
    return firebasePosts;
  }

  let demoResults = demoPosts;

  if (category) {
    demoResults = demoPosts.filter((post) => post.category === category);
  }

  if (userId) {
    return firebasePosts;
  }

  const firebaseIds = new Set(firebasePosts.map((post) => post.id));

  return [
    ...firebasePosts,
    ...demoResults.filter((post) => !firebaseIds.has(post.id)),
  ];
}

export async function createPost(data) {
  return addDoc(collection(db, "posts"), {
    ...data,
    likesCount: 0,
    commentsCount: 0,
    savesCount: 0,
    reportsCount: 0,
    hidden: false,
    createdAt: serverTimestamp(),
  });
}

async function ensureDemoPostExists(postId, uid) {
  const postRef = doc(db, "posts", postId);
  const postSnap = await getDoc(postRef);

  if (postSnap.exists()) {
    return;
  }

  const demoPost = demoPosts.find((post) => post.id === postId);

  if (!demoPost) {
    return;
  }

  await setDoc(postRef, {
    ...demoPost,
    authorId: uid,
    originalDemoPost: true,
    createdAt: serverTimestamp(),
  });
}

export async function toggleLike(postId, uid) {
  if (!uid) {
    throw new Error("You must be logged in to like posts.");
  }

  await ensureDemoPostExists(postId, uid);

  const postRef = doc(db, "posts", postId);
  const likeRef = doc(db, "posts", postId, "likes", uid);
  const likeSnap = await getDoc(likeRef);

  if (likeSnap.exists()) {
    await deleteDoc(likeRef);

    await updateDoc(postRef, {
      likesCount: increment(-1),
    });

    return false;
  }

  await setDoc(likeRef, {
    uid,
    createdAt: serverTimestamp(),
  });

  await updateDoc(postRef, {
    likesCount: increment(1),
  });

  return true;
}

export async function savePost(postId, uid) {
  if (!uid) {
    throw new Error("You must be logged in to save posts.");
  }

  await ensureDemoPostExists(postId, uid);

  await setDoc(doc(db, "posts", postId, "saves", uid), {
    uid,
    createdAt: serverTimestamp(),
  });

  await updateDoc(doc(db, "posts", postId), {
    savesCount: increment(1),
  });
}

export async function reportPost(post, reporterId, reason) {
  if (!reporterId) {
    throw new Error("You must be logged in to report posts.");
  }

  await ensureDemoPostExists(post.id, reporterId);

  await addDoc(collection(db, "reports"), {
    postId: post.id,
    postTitle: post.title,
    reporterId,
    reportedBy: reporterId,
    reason,
    status: "open",
    createdAt: serverTimestamp(),
  });

  await updateDoc(doc(db, "posts", post.id), {
    reportsCount: increment(1),
  });
}