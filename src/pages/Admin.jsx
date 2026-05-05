// /src/pages/Admin.jsx
import { collection, doc, getDocs, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function Admin() {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [reports, setReports] = useState([]);
  async function load() { const r = await getDocs(query(collection(db,'verificationRequests'), where('status','==','pending'))); setRequests(r.docs.map(d=>({id:d.id,...d.data()}))); const rep = await getDocs(query(collection(db,'reports'), where('status','==','open'))); setReports(rep.docs.map(d=>({id:d.id,...d.data()}))); }
  useEffect(()=>{ load(); }, []);
  async function review(req, status) { await updateDoc(doc(db,'verificationRequests',req.id), { status, reviewedAt: serverTimestamp(), reviewedBy: user.uid }); await updateDoc(doc(db,'users',req.uid), { role: status === 'approved' ? 'expert' : 'member', verificationStatus: status }); load(); }
  async function hidePost(postId, hidden) { await updateDoc(doc(db,'posts',postId), { hidden }); alert(hidden ? 'Post hidden.' : 'Post restored.'); }
  return <Layout><div className="glass-card mb-5 rounded-3xl p-6 shadow-soft"><h1 className="hero-title text-4xl font-bold text-forest">Admin Dashboard</h1><p className="text-sm text-stone-600">Review expert requests and reported posts.</p></div><section className="mb-8"><h2 className="mb-4 text-2xl font-bold text-forest">Verification Requests</h2><div className="space-y-4">{requests.length ? requests.map(req => <div key={req.id} className="glass-card rounded-3xl p-5 shadow-soft"><h3 className="font-bold text-forest">{req.fullName} · {req.profession}</h3><p className="text-sm text-stone-600">{req.location} · {req.yearsExperience} years</p><p className="mt-2 text-sm">{req.credentialDescription}</p><a href={req.credentialUrl} target="_blank" className="text-sm font-bold text-sage">Credential URL</a><div className="mt-4 flex gap-3"><button onClick={()=>review(req,'approved')} className="rounded-full bg-forest px-4 py-2 text-sm font-bold text-white">Approve</button><button onClick={()=>review(req,'rejected')} className="rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-800">Reject</button></div></div>) : <p className="text-sm text-stone-500">No pending requests.</p>}</div></section><section><h2 className="mb-4 text-2xl font-bold text-forest">Reported Posts</h2><div className="space-y-4">{reports.length ? reports.map(rep => <div key={rep.id} className="glass-card rounded-3xl p-5 shadow-soft"><h3 className="font-bold text-forest">{rep.postTitle}</h3><p className="text-sm text-stone-600">Reason: {rep.reason}</p><div className="mt-4 flex gap-3"><button onClick={()=>hidePost(rep.postId,true)} className="rounded-full bg-forest px-4 py-2 text-sm font-bold text-white">Hide Post</button><button onClick={()=>hidePost(rep.postId,false)} className="rounded-full bg-mint px-4 py-2 text-sm font-bold text-forest">Restore</button></div></div>) : <p className="text-sm text-stone-500">No open reports.</p>}</div></section></Layout>;
}
