import { supabase } from "../../../lib/supabase/superbase";

//Dashboard API Call
async function dashboardApi() {
  const response = await supabase.from("dashboard").select("*");
  return response;
}

export default dashboardApi;
