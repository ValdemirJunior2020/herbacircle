// src/components/PostCard.jsx

import {
  Bookmark,
  Flag,
  Heart,
  MessageCircle,
  MoreHorizontal,
  ShieldAlert,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { reportPost, savePost, toggleLike } from "../utils/firestoreHelpers";
import { formatDate } from "../utils/dateHelpers";
import ExpertBadge from "./ExpertBadge";
import ImageUrlPreview from "./ImageUrlPreview";

const cautionCategories = [
  "Immunity",
  "Gut Health",
  "Skin Care",
  "Safety Warnings",
];

export default function PostCard({ post }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [likesCount, setLikesCount] = useState(post.likesCount || 0);
  const [savesCount, setSavesCount] = useState(post.savesCount || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleLike = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (busy) return;

    try {
      setBusy(true);

      const likedNow = await toggleLike(post.id, user.uid);

      setIsLiked(likedNow);
      setLikesCount((current) => {
        if (likedNow) return current + 1;
        return Math.max(0, current - 1);
      });
    } catch (err) {
      console.error("Like error:", err);
      alert(err.message || "Could not like this post.");
    } finally {
      setBusy(false);
    }
  };

  const handleSave = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (busy) return;

    try {
      setBusy(true);

      await savePost(post.id, user.uid);

      if (!isSaved) {
        setSavesCount((current) => current + 1);
      }

      setIsSaved(true);
    } catch (err) {
      console.error("Save error:", err);
      alert(err.message || "Could not save this post.");
    } finally {
      setBusy(false);
    }
  };

  const handleReport = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const reason = prompt(
      "Report reason: Dangerous medical advice, false claim, spam, harassment, or other?"
    );

    if (!reason) return;

    try {
      await reportPost(post, user.uid, reason);
      alert("Report submitted. Thank you for helping keep HerbaCircle safe.");
    } catch (err) {
      console.error("Report error:", err);
      alert(err.message || "Could not report this post.");
    }
  };

  return (
    <article className="glass-card overflow-hidden rounded-3xl p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="mb-3 flex items-start gap-3">
        <img
          src={post.authorPhoto || "/assets/logo.png"}
          alt={post.authorName || "HerbaCircle Member"}
          className="h-11 w-11 rounded-full object-cover"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to={post.authorId ? `/profile/${post.authorId}` : "/experts"}
              className="font-bold text-forest hover:underline"
            >
              {post.authorName || "HerbaCircle Member"}
            </Link>

            {post.authorVerified && <ExpertBadge small />}

            <span className="text-xs text-stone-500">
              • {formatDate(post.createdAt)}
            </span>
          </div>

          <span className="mt-1 inline-flex rounded-full bg-cream px-3 py-1 text-xs font-bold text-forest">
            {post.category}
          </span>
        </div>

        <MoreHorizontal className="text-stone-400" />
      </div>

      <Link to={`/post/${post.id}`}>
        <h2 className="mb-2 text-xl font-extrabold text-forest">
          {post.title}
        </h2>
      </Link>

      <p className="mb-3 text-sm leading-6 text-stone-700">{post.content}</p>

      {cautionCategories.includes(post.category) && (
        <div className="mb-3 flex gap-2 rounded-2xl bg-amber-50 p-3 text-xs text-amber-900">
          <ShieldAlert size={16} />
          Natural remedies can interact with medications. Consult a
          professional.
        </div>
      )}

      <ImageUrlPreview url={post.imageUrl} className="mb-3 max-h-[420px]" />

      <div className="mb-3 flex flex-wrap gap-2">
        {(post.tags || []).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-tealsoft px-3 py-1 text-xs font-semibold text-forest"
          >
            #{tag}
          </span>
        ))}
      </div>

      {(post.reportsCount || 0) >= 3 && (
        <div className="mb-3 rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-800">
          This post has multiple reports and may be reviewed by admins.
        </div>
      )}

      <div className="flex items-center justify-between border-t border-sage/10 pt-3 text-sm text-stone-600">
        <button
          type="button"
          onClick={handleLike}
          disabled={busy}
          className={`flex items-center gap-2 rounded-full px-3 py-2 transition ${
            isLiked
              ? "bg-rose-50 text-rose-600"
              : "hover:bg-rose-50 hover:text-rose-600"
          }`}
        >
          <Heart
            size={18}
            className={isLiked ? "fill-current text-rose-600" : ""}
          />
          {likesCount}
        </button>

        <Link
          to={`/post/${post.id}`}
          className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-mint"
        >
          <MessageCircle size={18} />
          {post.commentsCount || 0}
        </Link>

        <button
          type="button"
          onClick={handleSave}
          disabled={busy}
          className={`flex items-center gap-2 rounded-full px-3 py-2 transition ${
            isSaved
              ? "bg-mint text-forest"
              : "hover:bg-mint"
          }`}
        >
          <Bookmark
            size={18}
            className={isSaved ? "fill-current text-forest" : ""}
          />
          {isSaved ? "Saved" : `Save ${savesCount ? savesCount : ""}`}
        </button>

        <button
          type="button"
          onClick={handleReport}
          className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-amber-50"
        >
          <Flag size={18} />
          Report
        </button>
      </div>
    </article>
  );
}