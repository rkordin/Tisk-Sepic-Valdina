import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch all content for a page
export async function getPageContent(page) {
  const { data, error } = await supabase
    .from("page_content")
    .select("section, content")
    .eq("page", page);

  if (error) {
    console.error("CMS fetch error:", error);
    return {};
  }

  // Convert array to { section: content } map
  return data.reduce((acc, row) => {
    acc[row.section] = row.content;
    return acc;
  }, {});
}

// Update a specific section
export async function updateContent(page, section, content) {
  const { error } = await supabase
    .from("page_content")
    .upsert({ page, section, content }, { onConflict: "page,section" });

  if (error) {
    console.error("CMS update error:", error);
    throw error;
  }
}

// Fetch all content (for admin panel)
export async function getAllContent() {
  const { data, error } = await supabase
    .from("page_content")
    .select("*")
    .order("page")
    .order("section");

  if (error) {
    console.error("CMS fetch all error:", error);
    return [];
  }
  return data;
}
