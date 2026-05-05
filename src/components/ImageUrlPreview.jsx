// /src/components/ImageUrlPreview.jsx
import { ImageOff, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function ImageUrlPreview({ url, className = '' }) {
  const [error, setError] = useState(false);
  if (!url || error) return <div className={`flex min-h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-cream text-forest ${className}`}><div className="text-center"><Leaf className="mx-auto mb-2" /><p className="text-sm font-semibold">Herbal image preview</p><p className="text-xs opacity-70"><ImageOff className="mr-1 inline" size={12}/> Add a valid image URL</p></div></div>;
  return <img src={url} onError={() => setError(true)} alt="Post preview" className={`w-full rounded-2xl object-cover ${className}`} />;
}
