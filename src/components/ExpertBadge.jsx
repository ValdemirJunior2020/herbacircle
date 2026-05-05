// /src/components/ExpertBadge.jsx
import { BadgeCheck } from 'lucide-react';

export default function ExpertBadge({ small = false }) {
  return <span className={`inline-flex items-center gap-1 rounded-full bg-mint px-2 py-1 font-semibold text-forest ${small ? 'text-[10px]' : 'text-xs'}`}><BadgeCheck size={small ? 12 : 14} /> Verified</span>;
}
