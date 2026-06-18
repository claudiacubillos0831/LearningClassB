import { createClient } from "@supabase/supabase-js";

// Datos públicos del proyecto Supabase (la "publishable key" es segura en el navegador
// siempre que las tablas tengan Row Level Security activado).
const SUPABASE_URL = "https://umydnupxqfawuzstuhkp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_DfDlOdUfcaUYLBWx4lW5dQ_ZatQwhGQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
