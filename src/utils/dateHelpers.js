// /src/utils/dateHelpers.js
export function formatDate(value) {
  if (!value) return 'Just now';
  const date = value?.toDate ? value.toDate() : new Date(value);
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}
