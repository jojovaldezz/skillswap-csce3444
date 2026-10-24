import { createClient } from '@supabase/supabase-js';
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
// Not used yet. Configure .env.local before importing this client into services.
export const supabase = url && key ? createClient(url, key) : null;
