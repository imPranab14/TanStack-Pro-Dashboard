import { useQueries, useQuery } from "@tanstack/react-query";
import { listOfUser, slowResponseUserList } from "../api/user.api.js";

function UserPage() {
  //NOTE Supabase User Table API Call
  async function fetchUser() {
    const { data, error } = await listOfUser();
    if (error) {
      throw error;
    }
    return data;
  }

  //Postman Mock Server API Call
  async function fetchSlowResponseUserList() {
    const { data, error } = await slowResponseUserList();
    if (error) {
      throw error;
    }
    return data;
  }

  //NOTE TenStack Query
  // const user = useQuery({
  //   queryKey: ["user"],
  //   queryFn: fetchSlowResponseUserList,
  // });

  // const results = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["user"],
  //       queryFn: fetchUser,
  //     }
  //   ],
  // });

  const { data: slowUserData } = useQuery({
    queryKey: ["slowUser"],
    queryFn: fetchSlowResponseUserList,
  });

  console.log("results", slowUserData);

  return (
    <>
      {/* {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        data?.map((ele, id) => {
          return <h1 key={id}>{ele.name}</h1>;
        })} */}

      {slowUserData?.map((ele, id) => {
        return <h1 key={id}>{ele.name}</h1>;
      })}
    </>
  );
}

export default UserPage;
