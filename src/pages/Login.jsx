// /src/pages/Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  async function submit(e) { e.preventDefault(); setError(''); try { await login(form.email, form.password); navigate('/community'); } catch (err) { setError(err.message); } }
  return <Layout sidebars={false}><div className="mx-auto max-w-md glass-card rounded-3xl p-8 shadow-soft"><img src="/assets/logo.png" className="mx-auto mb-4 h-24"/><h1 className="hero-title mb-2 text-center text-4xl font-bold text-forest">Welcome Back</h1><p className="mb-6 text-center text-sm text-stone-600">Sign in to continue sharing safely.</p>{error && <p className="mb-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}<form onSubmit={submit} className="space-y-4"><input className="w-full rounded-2xl border border-sage/20 px-4 py-3" placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required/><input className="w-full rounded-2xl border border-sage/20 px-4 py-3" placeholder="Password" type="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} required/><button className="w-full rounded-2xl bg-forest py-3 font-bold text-white">Sign In</button></form><p className="mt-5 text-center text-sm">New here? <Link to="/signup" className="font-bold text-forest">Create account</Link></p></div></Layout>;
}
