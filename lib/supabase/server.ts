import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function createServerSupabaseClient() {
  if (!supabaseUrl || (!supabaseServiceRoleKey && !supabaseAnonKey)) {
    return null;
  }
  // Use service role key if available for trusted server actions, or anon key
  const key = supabaseServiceRoleKey || supabaseAnonKey!;
  return createClient(supabaseUrl, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
