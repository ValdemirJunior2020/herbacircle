// /src/utils/firestoreHelpers.js
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, increment, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../firebase';
import { demoPosts } from '../data/demoData';

export async function getPosts({ category = '', userId = '', limitDemo = false } = {}) {
  let q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
  if (category) q = query(collection(db, 'posts'), where('category', '==', category), orderBy('createdAt', 'desc'));
  if (userId) q = query(collection(db, 'posts'), where('authorId', '==', userId), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  const posts = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  if (!posts.length && limitDemo) return demoPosts;
  return posts;
}

export async function createPost(data) {
  return addDoc(collection(db, 'posts'), { ...data, likesCount: 0, commentsCount: 0, savesCount: 0, reportsCount: 0, hidden: false, createdAt: serverTimestamp() });
}

export async function toggleLike(postId, uid) {
  const likeRef = doc(db, 'posts', postId, 'likes', uid);
  const exists = (await getDoc(likeRef)).exists();
  if (exists) await deleteDoc(likeRef);
  else await setDoc(likeRef, { uid, createdAt: serverTimestamp() });
  await updateDoc(doc(db, 'posts', postId), { likesCount: increment(exists ? -1 : 1) });
}

export async function savePost(postId, uid) {
  await setDoc(doc(db, 'posts', postId, 'saves', uid), { uid, createdAt: serverTimestamp() });
  await updateDoc(doc(db, 'posts', postId), { savesCount: increment(1) });
}

export async function reportPost(post, reporterId, reason) {
  await addDoc(collection(db, 'reports'), { postId: post.id, postTitle: post.title, reporterId, reason, status: 'open', createdAt: serverTimestamp() });
  await updateDoc(doc(db, 'posts', post.id), { reportsCount: increment(1) });
}
