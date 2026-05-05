// /src/components/CommentList.jsx
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, updateDoc, doc, increment } from 'firebase/firestore';
import { Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { formatDate } from '../utils/dateHelpers';

export default function CommentList({ postId }) {
  const { user, profile } = useAuth();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  useEffect(() => {
    const q = query(collection(db, 'posts', postId, 'comments'), orderBy('createdAt', 'asc'));
    return onSnapshot(q, (snap) => setComments(snap.docs.map((d) => ({ id: d.id, ...d.data() }))));
  }, [postId]);
  const submit = async (e) => {
    e.preventDefault();
    if (!user || !text.trim()) return;
    await addDoc(collection(db, 'posts', postId, 'comments'), { text: text.trim(), authorId: user.uid, authorName: profile?.displayName || user.email, authorPhoto: profile?.photoURL || '', createdAt: serverTimestamp() });
    await updateDoc(doc(db, 'posts', postId), { commentsCount: increment(1) });
    setText('');
  };
  return <div className="glass-card rounded-3xl p-5 shadow-soft">
    <h3 className="mb-4 font-bold text-forest">Comments</h3>
    <div className="mb-4 space-y-3">{comments.length ? comments.map((c) => <div key={c.id} className="rounded-2xl bg-white/80 p-3"><div className="mb-1 flex items-center gap-2 text-xs text-stone-500"><img src={c.authorPhoto || '/assets/logo.png'} className="h-7 w-7 rounded-full object-cover"/><b className="text-forest">{c.authorName}</b> {formatDate(c.createdAt)}</div><p className="text-sm text-stone-700">{c.text}</p></div>) : <p className="text-sm text-stone-500">No comments yet. Be the first to share respectfully.</p>}</div>
    {user ? <form onSubmit={submit} className="flex gap-2"><input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 rounded-2xl border border-sage/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-sage" placeholder="Write a kind comment..."/><button className="rounded-2xl bg-forest px-4 text-white"><Send size={18}/></button></form> : <p className="text-sm text-stone-500">Sign in to comment.</p>}
  </div>;
}
