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

async function slowImageAPI() {
  try {
    const response = await axios.get(
      "https://1707ce55-ccd6-4f31-ae27-dcb920e9d2bd.mock.pstmn.io/slowImage",
    );
    return response;
  } catch (error) {
    console.log("Slow user response api error", error);
    throw error;
  }
}

//Unsplash Image API
async function unsplashImageAPI() {
  try {
    const response = await axios.get(
      "https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?ixid=M3w3MTMyOTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQwMDI1NTR8&ixlib=rb-4.1.0",
      {
        responseType: "blob",
      },
    );
    return response;
  } catch (error) {
    console.log("Slow user response api error", error);
    throw error;
  }
}


async function nodeImageAPI() {
  try {
    const response = await axios.get(
      "http://localhost:3000/node/image",
      {
        responseType: "blob",
      },
    );
    return response;
  } catch (error) {
    console.log("Slow user response api error", error);
    throw error;
  }
}

export { listOfUser, slowResponseUserList, slowImageAPI, unsplashImageAPI,nodeImageAPI };
