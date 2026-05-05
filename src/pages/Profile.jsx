// /src/pages/Profile.jsx
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ExpertBadge from '../components/ExpertBadge';
import PostCard from '../components/PostCard';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { getPosts } from '../utils/firestoreHelpers';

export default function Profile() {
  const { uid } = useParams();
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [edit, setEdit] = useState({ displayName: '', photoURL: '', bio: '', profession: '' });
  const own = user?.uid === uid;
  useEffect(() => { (async()=>{ const snap = await getDoc(doc(db,'users',uid)); if (snap.exists()) { setProfile({uid,...snap.data()}); setEdit(snap.data()); } setPosts(await getPosts({ userId: uid })); })(); }, [uid]);
  async function save() { await updateDoc(doc(db,'users',uid), { displayName: edit.displayName || '', photoURL: edit.photoURL || '', bio: edit.bio || '', profession: edit.profession || '' }); setProfile({ ...profile, ...edit }); alert('Profile updated.'); }
  if (!profile) return <Layout><div className="glass-card rounded-3xl p-8 shadow-soft">Profile not found.</div></Layout>;
  return <Layout><div className="glass-card mb-5 rounded-3xl p-6 shadow-soft"><div className="flex flex-col gap-5 md:flex-row md:items-center"><img src={profile.photoURL || '/assets/logo.png'} className="h-28 w-28 rounded-full object-cover bg-white"/><div className="flex-1"><div className="flex flex-wrap items-center gap-3"><h1 className="hero-title text-4xl font-bold text-forest">{profile.displayName}</h1>{profile.role === 'expert' && <ExpertBadge/>}<span className={`rounded-full px-3 py-1 text-xs font-bold ${profile.role === 'admin' ? 'bg-forest text-white' : profile.verificationStatus === 'pending' ? 'bg-amber-100 text-amber-800' : profile.verificationStatus === 'rejected' ? 'bg-rose-100 text-rose-800' : 'bg-mint text-forest'}`}>{profile.role} · {profile.verificationStatus}</span></div><p className="mt-2 text-stone-600">{profile.profession}</p><p className="mt-2 text-sm leading-6 text-stone-600">{profile.bio || 'No bio yet.'}</p></div></div>{own && <div className="mt-6 grid gap-3 md:grid-cols-2"><input className="rounded-2xl border border-sage/20 px-4 py-3" value={edit.displayName || ''} onChange={(e)=>setEdit({...edit,displayName:e.target.value})} placeholder="Display name"/><input className="rounded-2xl border border-sage/20 px-4 py-3" value={edit.photoURL || ''} onChange={(e)=>setEdit({...edit,photoURL:e.target.value})} placeholder="Photo URL"/><input className="rounded-2xl border border-sage/20 px-4 py-3" value={edit.profession || ''} onChange={(e)=>setEdit({...edit,profession:e.target.value})} placeholder="Profession"/><textarea className="rounded-2xl border border-sage/20 px-4 py-3" value={edit.bio || ''} onChange={(e)=>setEdit({...edit,bio:e.target.value})} placeholder="Bio"/><button onClick={save} className="rounded-2xl bg-forest px-5 py-3 font-bold text-white md:col-span-2">Save Profile</button></div>}</div><h2 className="hero-title mb-4 text-3xl font-bold text-forest">Posts</h2><div className="space-y-5">{posts.length ? posts.map((p)=><PostCard key={p.id} post={p}/>) : <div className="glass-card rounded-3xl p-8 text-center shadow-soft">No posts yet.</div>}</div></Layout>;
}
