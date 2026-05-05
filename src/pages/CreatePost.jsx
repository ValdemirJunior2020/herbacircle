// /src/pages/CreatePost.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import DisclaimerBanner from '../components/DisclaimerBanner';
import ImageUrlPreview from '../components/ImageUrlPreview';
import { categories } from '../data/demoData';
import { useAuth } from '../context/AuthContext';
import { createPost } from '../utils/firestoreHelpers';

export default function CreatePost() {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', content: '', category: 'General Wellness', imageUrl: '', tags: '', safetyNote: '' });
  const [error, setError] = useState('');
  async function submit(e) {
    e.preventDefault(); setError('');
    try {
      await createPost({ ...form, tags: form.tags.split(',').map(t=>t.trim()).filter(Boolean), authorId: user.uid, authorName: profile?.displayName || user.email, authorPhoto: profile?.photoURL || '', authorRole: profile?.role || 'member', authorVerified: profile?.role === 'expert' && profile?.verificationStatus === 'approved' });
      navigate('/community');
    } catch (err) { setError(err.message); }
  }
  return <Layout><DisclaimerBanner type="post"/><div className="glass-card rounded-3xl p-6 shadow-soft"><h1 className="hero-title mb-2 text-4xl font-bold text-forest">Create a Natural Wellness Post</h1><p className="mb-6 text-sm text-stone-600">Share experiences, not medical instructions. Image URLs only.</p>{error && <p className="mb-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}<form onSubmit={submit} className="grid gap-4"><input className="rounded-2xl border border-sage/20 px-4 py-3" placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} required/><textarea className="min-h-36 rounded-2xl border border-sage/20 px-4 py-3" placeholder="Share your safe discussion..." value={form.content} onChange={(e)=>setForm({...form,content:e.target.value})} required/><select className="rounded-2xl border border-sage/20 px-4 py-3" value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}>{categories.map(c=><option key={c}>{c}</option>)}</select><input className="rounded-2xl border border-sage/20 px-4 py-3" placeholder="Image URL" value={form.imageUrl} onChange={(e)=>setForm({...form,imageUrl:e.target.value})}/><ImageUrlPreview url={form.imageUrl} className="max-h-80"/><input className="rounded-2xl border border-sage/20 px-4 py-3" placeholder="Tags separated by commas" value={form.tags} onChange={(e)=>setForm({...form,tags:e.target.value})}/><textarea className="rounded-2xl border border-sage/20 px-4 py-3" placeholder="Safety note: interactions, allergies, professional guidance..." value={form.safetyNote} onChange={(e)=>setForm({...form,safetyNote:e.target.value})}/><button className="rounded-2xl bg-forest px-6 py-4 font-bold text-white hover:bg-sage">Publish Post</button></form></div></Layout>;
}
