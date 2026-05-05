// /src/components/PostComposer.jsx
import { Image, Leaf, ListChecks, Pencil, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PostComposer() {
  const { user, profile } = useAuth();
  return <div className="glass-card rounded-3xl p-4 shadow-soft">
    <div className="flex items-center gap-3">
      <img src={profile?.photoURL || '/assets/logo.png'} alt="avatar" className="h-11 w-11 rounded-full object-cover" />
      <Link to={user ? '/create-post' : '/login'} className="flex-1 rounded-2xl border border-sage/20 bg-white/80 px-5 py-4 text-left text-sm text-stone-500 hover:bg-cream">What herbal knowledge or experience would you like to share?</Link>
      <Link to={user ? '/create-post' : '/login'} className="rounded-2xl bg-forest px-5 py-3 font-bold text-white hover:bg-sage">Post</Link>
    </div>
    <div className="mt-4 grid grid-cols-4 gap-2 text-xs font-bold text-stone-600">
      <Link to="/create-post" className="flex items-center justify-center gap-2 rounded-xl p-2 hover:bg-cream"><Pencil size={16}/>Text</Link>
      <Link to="/create-post" className="flex items-center justify-center gap-2 rounded-xl p-2 hover:bg-cream"><Image size={16}/>Photo URL</Link>
      <Link to="/create-post" className="flex items-center justify-center gap-2 rounded-xl p-2 hover:bg-cream"><Leaf size={16}/>Remedy</Link>
      <Link to="/create-post" className="flex items-center justify-center gap-2 rounded-xl p-2 hover:bg-cream"><ListChecks size={16}/>Poll</Link>
    </div>
  </div>;
}
