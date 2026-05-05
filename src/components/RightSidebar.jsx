// /src/components/RightSidebar.jsx
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, Users } from 'lucide-react';
import { experts, topics } from '../data/demoData';
import ExpertBadge from './ExpertBadge';

export default function RightSidebar() {
  return <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-80 shrink-0 overflow-auto xl:block">
    <div className="glass-card rounded-3xl p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between"><h3 className="font-bold text-forest">Verified Experts</h3><Link to="/experts" className="text-xs font-bold text-sage">View all</Link></div>
      <div className="space-y-4">{experts.map((e) => <div key={e.id} className="flex items-center gap-3"><img src={e.photoURL} alt={e.name} className="h-11 w-11 rounded-full object-cover"/><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-forest">{e.name}</p><p className="truncate text-xs text-stone-500">{e.profession}</p></div><ExpertBadge small /></div>)}</div>
    </div>
    <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-1">
      <div className="glass-card rounded-3xl p-5 shadow-soft"><h3 className="mb-4 font-bold text-forest">Trending Topics</h3><div className="flex flex-wrap gap-2">{topics.map((t, i) => <span key={t} className={`rounded-full px-3 py-2 text-xs font-bold ${i === 0 ? 'bg-blush text-rose-900' : 'bg-mint text-forest'}`}># {t}</span>)}</div></div>
      <div className="glass-card rounded-3xl p-5 shadow-soft"><div className="mb-4 flex items-center justify-between"><h3 className="font-bold text-forest">Community Groups</h3><span className="text-xs font-bold text-sage">View all</span></div>{['Herbal Remedies 101','Natural Healing Journey','Ayurveda & You','Plant Lovers Community'].map((g, i) => <div key={g} className="mb-4 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-mint"><Users size={18}/></div><div><p className="text-sm font-bold text-forest">{g}</p><p className="text-xs text-stone-500">{[12.4,8.7,6.1,9.3][i]}K members</p></div></div>)}</div>
      <div className="glass-card rounded-3xl p-5 shadow-soft"><h3 className="mb-3 flex items-center gap-2 font-bold text-forest"><Lock size={18}/> Safety First</h3><p className="text-xs leading-5 text-stone-600">Verified expert badges mean credentials were reviewed, not that every post is medically approved.</p><Link to="/verification" className="mt-4 inline-flex rounded-full bg-forest px-4 py-2 text-sm font-bold text-white">Apply for Verification</Link></div>
    </div>
  </aside>;
}
