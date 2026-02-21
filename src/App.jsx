import { useQuery } from "@tanstack/react-query";
import { supabase } from "./lib/supabase/superbase";
import { useEffect, useState } from "react";
import { listOfUser } from "./features/user/api/user.api.js";
import "./App.css";

function App() {
  //const [user, setUser] = useState(null);
  //NOTE Superbase User Table API Call
  async function fetchUser() {
    const { data, error } = await listOfUser();
    if (error) {
      throw error;
    }
    return data;
  }

  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  console.log("userData", data, isLoading);

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        data?.map((ele, id) => {
          return <p key={id}>{ele.name}</p>;
        })}
    </>
  );
}

export default App;
