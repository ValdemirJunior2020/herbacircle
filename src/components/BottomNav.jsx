// /src/components/BottomNav.jsx
import { Home, Leaf, PlusCircle, ShieldCheck, UserCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function BottomNav() {
  const { user } = useAuth();
  const items = [['/', Home, 'Home'], ['/community', Leaf, 'Feed'], ['/create-post', PlusCircle, 'Post'], ['/experts', ShieldCheck, 'Experts'], [user ? `/profile/${user.uid}` : '/login', UserCircle, 'Profile']];
  return <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-sage/20 bg-white/95 p-2 shadow-2xl backdrop-blur lg:hidden">
    {items.map(([to, Icon, label]) => <NavLink key={label} to={to} className={({ isActive }) => `flex flex-col items-center gap-1 rounded-xl py-2 text-xs font-semibold ${isActive ? 'bg-mint text-forest' : 'text-stone-500'}`}><Icon size={19}/>{label}</NavLink>)}
  </nav>;
}
