// /src/components/Sidebar.jsx
import { Bell, Bookmark, Home, Leaf, MessageCircle, Plus, Settings, ShieldCheck, Sprout, UserRound, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [['/', Home, 'Home'], ['/community', Users, 'Community'], ['/remedies', Leaf, 'Remedies'], ['/experts', ShieldCheck, 'Experts'], ['/verification', Sprout, 'Verification'], ['/saved', Bookmark, 'Saved']];

export default function Sidebar() {
  return <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-64 shrink-0 overflow-auto lg:block">
    <div className="glass-card rounded-3xl p-5 shadow-soft">
      {links.map(([to, Icon, label]) => <NavLink key={label} to={to} className={({ isActive }) => `mb-2 flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold ${isActive ? 'bg-mint text-forest' : 'text-stone-600 hover:bg-cream'}`}><Icon size={18}/>{label}</NavLink>)}
      <div className="my-4 border-t border-sage/20" />
      {[['Notifications', Bell], ['Messages', MessageCircle], ['Profile', UserRound], ['Settings', Settings]].map(([label, Icon]) => <div key={label} className="mb-2 flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold text-stone-500"><Icon size={18}/>{label}</div>)}
      <NavLink to="/create-post" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-mint px-4 py-3 text-sm font-bold text-forest hover:bg-sage hover:text-white"><Plus size={18}/> Create Post</NavLink>
    </div>
    <div className="glass-card mt-6 rounded-3xl p-5 text-sm shadow-soft">
      <h3 className="mb-2 font-bold text-forest">Built for a Better Community</h3>
      <p className="mb-4 text-xs text-stone-600">Powered by Firebase authentication, expert review workflow, and safer community sharing.</p>
      <ul className="space-y-2 text-xs text-stone-700"><li>✓ Expert verification workflow</li><li>✓ Likes, comments and saves</li><li>✓ Report dangerous advice</li><li>✓ Secure starter rules</li></ul>
    </div>
  </aside>;
}
