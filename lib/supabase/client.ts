import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export function createBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a mock or null-safe instance for builds without credentials
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}
