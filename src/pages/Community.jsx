// /src/pages/Community.jsx
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import PostComposer from '../components/PostComposer';
import DisclaimerBanner from '../components/DisclaimerBanner';
import { getPosts } from '../utils/firestoreHelpers';
import { categories } from '../data/demoData';

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => { (async () => { setLoading(true); try { setPosts(await getPosts({ category, limitDemo: true })); } catch { setPosts([]); } setLoading(false); })(); }, [category]);
  return <Layout><DisclaimerBanner /><PostComposer /><div className="my-5 flex gap-2 overflow-x-auto pb-2"><button onClick={()=>setCategory('')} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold ${!category ? 'bg-forest text-white' : 'bg-white/80 text-forest'}`}>All</button>{categories.map((c) => <button key={c} onClick={()=>setCategory(c)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold ${category === c ? 'bg-forest text-white' : 'bg-white/80 text-forest'}`}>{c}</button>)}</div>{loading ? <p className="text-center text-stone-500">Loading community...</p> : <div className="space-y-5">{posts.length ? posts.map((post) => <PostCard key={post.id} post={post}/>) : <div className="glass-card rounded-3xl p-8 text-center shadow-soft"><h2 className="text-xl font-bold text-forest">No posts yet</h2><p className="text-sm text-stone-500">Start the first safe wellness discussion.</p></div>}</div>}</Layout>;
}
