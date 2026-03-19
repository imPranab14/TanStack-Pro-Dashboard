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

  const { data: slowUserData,isFetching,isLoading,isPending } = useQuery({
    queryKey: ["slowUser"],
    queryFn: fetchSlowResponseUserList,
  });

  console.log("results", slowUserData);


  
// (BEST UX PATTERN)

if(!slowUserData){
 return <p className="bg-amber-400">Loading Skeleton</p>
}
  return (
    <>
    {isFetching && <h1 className="bg-blue-400">SmallSpinner....</h1>}
    {/* {isLoading && <h1>isLoading</h1>}
    {isPending && <h1>isPending  ....</h1>} */}
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
