// /src/pages/Saved.jsx
import { collectionGroup, getDocs, query, where } from 'firebase/firestore';
import { Bookmark } from 'lucide-react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';

export default function Saved() {
  const { user } = useAuth();
  const [saved, setSaved] = useState([]);
  useEffect(() => { (async()=>{ if(!user) return; const q = query(collectionGroup(db,'saves'), where('uid','==',user.uid)); const snap = await getDocs(q); setSaved(snap.docs.map(d => d.ref.parent.parent.id)); })(); }, [user]);
  return <Layout><div className="glass-card rounded-3xl p-8 text-center shadow-soft"><Bookmark className="mx-auto mb-3 text-sage" size={46}/><h1 className="hero-title text-4xl font-bold text-forest">Saved Posts</h1><p className="mt-2 text-sm text-stone-600">Saved post IDs are listed here. Add a Cloud Function or batched document fetch later for a full saved feed.</p><div className="mt-5 flex flex-wrap justify-center gap-2">{saved.length ? saved.map(id => <span key={id} className="rounded-full bg-mint px-3 py-2 text-xs font-bold text-forest">{id}</span>) : <span className="text-sm text-stone-500">No saved posts yet.</span>}</div></div></Layout>;
}
