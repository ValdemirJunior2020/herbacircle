// /src/pages/Signup.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ displayName: '', email: '', password: '' });
  const [error, setError] = useState('');
  async function submit(e) { e.preventDefault(); setError(''); try { await signup(form.displayName, form.email, form.password); navigate('/community'); } catch (err) { setError(err.message); } }
  return <Layout sidebars={false}><div className="mx-auto max-w-md glass-card rounded-3xl p-8 shadow-soft"><img src="/assets/logo.png" className="mx-auto mb-4 h-24"/><h1 className="hero-title mb-2 text-center text-4xl font-bold text-forest">Join HerbaCircle</h1><p className="mb-6 text-center text-sm text-stone-600">Create your community profile.</p>{error && <p className="mb-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}<form onSubmit={submit} className="space-y-4"><input className="w-full rounded-2xl border border-sage/20 px-4 py-3" placeholder="Display name" value={form.displayName} onChange={(e)=>setForm({...form,displayName:e.target.value})} required/><input className="w-full rounded-2xl border border-sage/20 px-4 py-3" placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required/><input className="w-full rounded-2xl border border-sage/20 px-4 py-3" placeholder="Password" type="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} required/><button className="w-full rounded-2xl bg-forest py-3 font-bold text-white">Create Account</button></form><p className="mt-5 text-center text-sm">Already have an account? <Link to="/login" className="font-bold text-forest">Sign in</Link></p></div></Layout>;
}
