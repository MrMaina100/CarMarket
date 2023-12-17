import { createBrowserClient } from "@supabase/ssr";

export default createBrowserClient<Database>(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)