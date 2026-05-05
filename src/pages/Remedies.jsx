// /src/pages/Remedies.jsx
import { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout';
import DisclaimerBanner from '../components/DisclaimerBanner';
import PostCard from '../components/PostCard';
import { categories } from '../data/demoData';
import { getPosts } from '../utils/firestoreHelpers';

export default function Remedies() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('');
  const [expertOnly, setExpertOnly] = useState(false);
  const [sort, setSort] = useState('newest');
  useEffect(() => { (async()=> setPosts(await getPosts({ category, limitDemo: true })))(); }, [category]);
  const filtered = useMemo(() => [...posts].filter(p => !expertOnly || p.authorVerified).sort((a,b)=> sort === 'liked' ? (b.likesCount||0)-(a.likesCount||0) : 0), [posts, expertOnly, sort]);
  return <Layout><DisclaimerBanner /><div className="glass-card mb-5 rounded-3xl p-5 shadow-soft"><h1 className="hero-title text-4xl font-bold text-forest">Remedy Library</h1><p className="mt-2 text-sm text-stone-600">Community posts categorized by topic. Educational use only.</p><div className="mt-4 grid gap-3 md:grid-cols-3"><select className="rounded-2xl border border-sage/20 px-4 py-3" value={category} onChange={(e)=>setCategory(e.target.value)}><option value="">All categories</option>{categories.map(c=><option key={c}>{c}</option>)}</select><select className="rounded-2xl border border-sage/20 px-4 py-3" value={sort} onChange={(e)=>setSort(e.target.value)}><option value="newest">Newest</option><option value="liked">Most liked</option></select><label className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3"><input type="checkbox" checked={expertOnly} onChange={(e)=>setExpertOnly(e.target.checked)}/> Expert only</label></div></div><div className="space-y-5">{filtered.map((p)=><PostCard key={p.id} post={p}/>)}</div></Layout>;
}
