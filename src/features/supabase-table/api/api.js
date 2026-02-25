import { supabase } from "../../../lib/supabase/superbase";

//Dashboard API Call
async function userListAPI(fromRange, toRange) {
  const response = await supabase
    .from("user_list")
    .select("*", { count: "exact" }) // get total count;
    .range(fromRange, toRange);
  //5 second delay to simulate API response time
  return new Promise((resolve) =>
    setTimeout(() => resolve(response), 5 * 1000),
  ); 
}

export default userListAPI;
