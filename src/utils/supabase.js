import { createClient } from "@supabase/supabase-js";
import dayjs from "dayjs";
import { nanoid } from "nanoid";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const insertUrlGuestMode = async (url) => {
  const response = await supabase
    .from("urls")
    .insert({
      real_url: url,
      slug: nanoid(10),
      expired_at: dayjs().add(7, "days"),
    })
    .select()
    .single();
  return response;
};
