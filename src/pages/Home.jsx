// /src/pages/Home.jsx
import { Leaf, Lock, ShieldCheck, Sprout, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import DisclaimerBanner from '../components/DisclaimerBanner';
import { demoPosts, experts } from '../data/demoData';
import ExpertBadge from '../components/ExpertBadge';

export default function Home() {
  return <Layout sidebars={false}>
    <section className="relative overflow-hidden rounded-[2.5rem] bg-white/60 p-6 shadow-soft md:p-12">
      <div className="absolute inset-0 bg-[url('/assets/bg.png')] bg-cover bg-center opacity-70" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-forest"><Leaf size={17}/> Community knowledge only — not medical advice.</div>
          <h1 className="hero-title text-5xl font-bold leading-tight text-forest md:text-7xl">Share Herbal Knowledge. Grow Wellness Together.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">A trusted community for organic remedies, natural wellness discussions, verified experts, and real-life experiences.</p>
          <div className="mt-7 flex flex-wrap gap-4"><Link to="/signup" className="rounded-full bg-forest px-7 py-4 font-bold text-white shadow-soft hover:bg-sage">Join the Community</Link><Link to="/remedies" className="rounded-full bg-blush px-7 py-4 font-bold text-rose-900 hover:bg-rose-100">Explore Remedies</Link></div>
        </div>
        <div className="hidden justify-center lg:flex"><div className="relative"><img src="/assets/logo.png" className="h-72 w-72 rounded-full bg-white/70 object-contain p-8 shadow-soft"/><div className="absolute -right-10 -top-6 rounded-full border border-dashed border-sage bg-white/80 p-8 text-center text-xs font-bold uppercase tracking-wider text-forest">Backed by Nature<br/>Driven by Community</div></div></div>
      </div>
    </section>
    <section className="relative z-10 mx-auto -mt-8 grid max-w-5xl gap-4 px-4 md:grid-cols-4">
      {[['Verified Experts', ShieldCheck, 'Learn from reviewed professionals'], ['Organic & Safe', Leaf, 'Focus on natural, safe discussions'], ['Supportive Community', Users, 'Share, learn, and grow together'], ['Firebase Secured', Lock, 'Built on secure Firebase basics']].map(([t, Icon, d]) => <div key={t} className="glass-card rounded-3xl p-5 shadow-soft"><Icon className="mb-3 rounded-full bg-mint p-2 text-forest" size={38}/><h3 className="font-bold text-forest">{t}</h3><p className="mt-1 text-xs leading-5 text-stone-600">{d}</p></div>)}
    </section>
    <section className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]"><div><h2 className="hero-title mb-5 text-3xl font-bold text-forest">Community Preview</h2><div className="space-y-5">{demoPosts.slice(0,3).map((p) => <PostCard key={p.id} post={p}/>)}</div></div><div><h2 className="hero-title mb-5 text-3xl font-bold text-forest">Verified Experts</h2><div className="space-y-4">{experts.map((e) => <div key={e.id} className="glass-card rounded-3xl p-5 shadow-soft"><div className="flex items-center gap-4"><img src={e.photoURL} className="h-14 w-14 rounded-full object-cover"/><div><h3 className="font-bold text-forest">{e.name}</h3><p className="text-sm text-stone-500">{e.profession}</p><ExpertBadge small /></div></div></div>)}</div><Link to="/verification" className="mt-5 flex justify-center rounded-full bg-forest px-6 py-4 font-bold text-white">Apply for expert verification</Link></div></section>
    <section className="mt-10"><DisclaimerBanner /></section>
    <footer className="mt-12 rounded-3xl bg-forest p-8 text-white"><div className="flex flex-col justify-between gap-4 md:flex-row"><div><div className="hero-title text-2xl font-bold">HerbaCircle</div><p className="mt-2 text-sm text-white/70">A calm, safe community for natural wellness education.</p></div><div className="flex flex-wrap gap-4 text-sm text-white/80"><span>About</span><span>Community Guidelines</span><span>Privacy</span><span>Terms</span><span>Medical Disclaimer</span></div></div></footer>
  </Layout>;
}
