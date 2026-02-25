import { supabase } from "../../../lib/supabase/superbase";

//Dashboard API Call
async function userListAPI(fromRange, toRange) {
    console.log("range",fromRange,toRange);
  const response = await supabase
    .from("user_list")
    .select("*", { count: "exact" }) // get total count;
   // .range(fromRange, toRange);
  return response;
}

export default userListAPI;
