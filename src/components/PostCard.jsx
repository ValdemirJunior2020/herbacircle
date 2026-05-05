// /src/components/PostCard.jsx
import { Bookmark, Flag, Heart, MessageCircle, MoreHorizontal, ShieldAlert } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { reportPost, savePost, toggleLike } from '../utils/firestoreHelpers';
import { formatDate } from '../utils/dateHelpers';
import ExpertBadge from './ExpertBadge';
import ImageUrlPreview from './ImageUrlPreview';

const cautionCategories = ['Immunity', 'Gut Health', 'Skin Care', 'Safety Warnings'];

export default function PostCard({ post }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isDemo = String(post.id).startsWith('demo-');
  const interact = async (action) => {
    if (!user) return navigate('/login');
    if (isDemo) return alert('This is demo content. Create real posts after connecting Firebase.');
    try { await action(); } catch (err) { alert(err.message); }
  };
  const onReport = () => {
    const reason = prompt('Report reason: Dangerous medical advice, false claim, spam, harassment, or other?');
    if (reason) interact(() => reportPost(post, user.uid, reason));
  };

  return <article className="glass-card overflow-hidden rounded-3xl p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-xl">
    <div className="mb-3 flex items-start gap-3">
      <img src={post.authorPhoto || '/assets/logo.png'} alt={post.authorName} className="h-11 w-11 rounded-full object-cover" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2"><Link to={post.authorId ? `/profile/${post.authorId}` : '/experts'} className="font-bold text-forest hover:underline">{post.authorName || 'HerbaCircle Member'}</Link>{post.authorVerified && <ExpertBadge small />}<span className="text-xs text-stone-500">• {formatDate(post.createdAt)}</span></div>
        <span className="mt-1 inline-flex rounded-full bg-cream px-3 py-1 text-xs font-bold text-forest">{post.category}</span>
      </div>
      <MoreHorizontal className="text-stone-400" />
    </div>
    <Link to={isDemo ? '/community' : `/post/${post.id}`}><h2 className="mb-2 text-xl font-extrabold text-forest">{post.title}</h2></Link>
    <p className="mb-3 text-sm leading-6 text-stone-700">{post.content}</p>
    {cautionCategories.includes(post.category) && <div className="mb-3 flex gap-2 rounded-2xl bg-amber-50 p-3 text-xs text-amber-900"><ShieldAlert size={16}/> Natural remedies can interact with medications. Consult a professional.</div>}
    <ImageUrlPreview url={post.imageUrl} className="mb-3 max-h-[420px]" />
    <div className="mb-3 flex flex-wrap gap-2">{(post.tags || []).map((tag) => <span key={tag} className="rounded-full bg-tealsoft px-3 py-1 text-xs font-semibold text-forest">#{tag}</span>)}</div>
    {(post.reportsCount || 0) >= 3 && <div className="mb-3 rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-800">This post has multiple reports and may be reviewed by admins.</div>}
    <div className="flex items-center justify-between border-t border-sage/10 pt-3 text-sm text-stone-600">
      <button onClick={() => interact(() => toggleLike(post.id, user.uid))} className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-rose-50 hover:text-rose-600"><Heart size={18}/> {post.likesCount || 0}</button>
      <Link to={isDemo ? '/community' : `/post/${post.id}`} className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-mint"><MessageCircle size={18}/> {post.commentsCount || 0}</Link>
      <button onClick={() => interact(() => savePost(post.id, user.uid))} className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-mint"><Bookmark size={18}/> Save</button>
      <button onClick={onReport} className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-amber-50"><Flag size={18}/> Report</button>
    </div>
  </article>;
}
