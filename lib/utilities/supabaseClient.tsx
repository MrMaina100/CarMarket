import { createBrowserClient } from "@supabase/ssr";

export default createBrowserClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)