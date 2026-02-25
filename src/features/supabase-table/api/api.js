import { supabase } from "../../../lib/supabase/superbase";

//Dashboard API Call
async function userListAPI() {
  const response = await supabase.from("user_list").select("*");
  return response;
}

export default userListAPI;
