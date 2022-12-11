import { createClient } from "@supabase/supabase-js";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import axios from "axios";

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
  const response = await axios.post("/api/urls/add", {
    real_url: url,
    slug: nanoid(10),
    expired_at: dayjs().add(7, "days"),
  });
  return response.data;
};
