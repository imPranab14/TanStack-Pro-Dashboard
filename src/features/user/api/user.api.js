import { supabase } from "../../../lib/supabase/superbase";

//User API CALL
async function listOfUser() {
  const response = await supabase.from("user").select("*");
  return response;
}
export { listOfUser };
