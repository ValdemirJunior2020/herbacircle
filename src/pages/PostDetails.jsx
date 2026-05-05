// /src/pages/PostDetails.jsx
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import CommentList from '../components/CommentList';
import { db } from '../firebase';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { (async()=>{ const snap = await getDoc(doc(db,'posts',id)); setPost(snap.exists() ? {id:snap.id,...snap.data()} : null); setLoading(false); })(); }, [id]);
  return <Layout>{loading ? <p>Loading...</p> : post ? <div className="space-y-5"><PostCard post={post}/><CommentList postId={id}/></div> : <div className="glass-card rounded-3xl p-8 text-center shadow-soft">Post not found.</div>}</Layout>;
}
