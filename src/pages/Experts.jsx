// /src/pages/Experts.jsx
import Layout from '../components/Layout';
import ExpertBadge from '../components/ExpertBadge';
import { experts } from '../data/demoData';
import { Link } from 'react-router-dom';

export default function Experts() {
  return <Layout><div className="mb-6 glass-card rounded-3xl p-6 shadow-soft"><h1 className="hero-title text-4xl font-bold text-forest">Verified Experts Directory</h1><p className="mt-2 text-sm text-stone-600">Verified expert badges mean credentials were reviewed, not that every post is medically approved.</p></div><div className="grid gap-5 md:grid-cols-2">{experts.map((e) => <div key={e.id} className="glass-card rounded-3xl p-6 shadow-soft"><div className="flex items-center gap-4"><img src={e.photoURL} className="h-20 w-20 rounded-full object-cover"/><div><h2 className="text-xl font-bold text-forest">{e.name}</h2><p className="text-sm text-stone-600">{e.profession}</p><ExpertBadge /></div></div><p className="mt-4 text-sm leading-6 text-stone-600">Community educator focused on safe, evidence-aware natural wellness conversations.</p></div>)}</div><Link to="/verification" className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 font-bold text-white">Apply to become verified</Link></Layout>;
}
