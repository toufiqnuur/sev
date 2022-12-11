import { supabase } from "../../../utils/supabase";

export default async function handler(req, res) {
  if (!req.method === "POST") res.status(400);

  const response = await supabase
    .from("urls")
    .insert({ ...req.body })
    .select()
    .single();
  res.json(response);
}
