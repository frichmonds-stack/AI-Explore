import { useSyncExternalStore, useCallback } from 'react';

// Bookmarks / "My shortlist" — a tiny localStorage-backed store so teachers can
// save tools, guides and articles for later. No account, no server, no tracking.
// Items are keyed "type:id" (e.g. "tool:chatgpt"). A pub-sub store keeps every
// component (save buttons, the nav count, the Saved page) in sync, including
// across tabs via the browser 'storage' event.

const KEY = 'aift.bookmarks.v1';

function read() {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

let current = read();
const listeners = new Set();

function emit() {
  listeners.forEach((l) => l());
}
function write(next) {
  current = next;
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* quota / private mode */ }
  emit();
}

// Keep in sync if another tab changes the list.
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === KEY) { current = read(); emit(); }
  });
}

export const bookmarkKey = (type, id) => `${type}:${id}`;

export function toggleBookmark(key) {
  write(current.includes(key) ? current.filter((k) => k !== key) : [...current, key]);
}
export function clearBookmarks() { write([]); }

function subscribe(cb) { listeners.add(cb); return () => listeners.delete(cb); }
function getSnapshot() { return current; }

/** All saved keys (reactive). */
export function useBookmarks() {
  const saved = useSyncExternalStore(subscribe, getSnapshot, () => []);
  return {
    saved,
    count: saved.length,
    isSaved: useCallback((key) => saved.includes(key), [saved]),
    toggle: toggleBookmark,
    clear: clearBookmarks,
  };
}

/** Convenience for a single item. */
export function useBookmark(type, id) {
  const key = bookmarkKey(type, id);
  const { isSaved } = useBookmarks();
  return { saved: isSaved(key), toggle: useCallback(() => toggleBookmark(key), [key]) };
}
