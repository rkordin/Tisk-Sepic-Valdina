import { useState, useEffect } from "react";
import { getPageContent } from "../lib/supabase";

// Cache to avoid refetching on every component mount
const cache = {};

export function useCmsContent(page) {
  const [content, setContent] = useState(cache[page] || null);
  const [loading, setLoading] = useState(!cache[page]);

  useEffect(() => {
    if (cache[page]) {
      setContent(cache[page]);
      setLoading(false);
      return;
    }

    let cancelled = false;

    getPageContent(page).then((data) => {
      if (!cancelled) {
        cache[page] = data;
        setContent(data);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [page]);

  return { content, loading };
}

// Clear cache (useful after admin edits)
export function clearCmsCache() {
  Object.keys(cache).forEach((key) => delete cache[key]);
}
