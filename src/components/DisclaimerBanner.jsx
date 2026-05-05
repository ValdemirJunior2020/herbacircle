// /src/components/DisclaimerBanner.jsx
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBanner({ type = 'default' }) {
  const text = type === 'post'
    ? 'Do not post emergency advice, prescription instructions, dosage claims for serious conditions, or content telling users to stop medication.'
    : 'Community knowledge only — not medical advice. Always consult a licensed healthcare professional before using herbs, supplements, or natural remedies. For emergencies, call local emergency services immediately.';
  return <div className="mb-4 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50/90 p-4 text-sm text-amber-900 shadow-sm"><AlertTriangle className="mt-0.5 shrink-0" size={20} /><p>{text}</p></div>;
}
