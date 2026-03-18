import axios from "axios";
import { supabase } from "../../../lib/supabase/superbase";

//User API CALL (Supabase)
async function listOfUser() {
  const response = await supabase.from("user").select("*");
  return response;
}



//Postman mock server api
async function slowResponseUserList() {
  try {
    const response = await axios.get(
      "https://1707ce55-ccd6-4f31-ae27-dcb920e9d2bd.mock.pstmn.io/user",
    );
    return response;
  } catch (error) {
    console.log("Slow user response api error", error);
    throw error;
  }
}
export { listOfUser,slowResponseUserList };
