import { createClient } from "@supabase/supabase-js";

// SUPABASE_URL
// SUPABASE_PUBLIC_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_ANON_KEY);
