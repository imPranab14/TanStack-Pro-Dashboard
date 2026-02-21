import { useQuery } from "@tanstack/react-query";
import { listOfUser } from "../api/user.api.js";

function UserPage() {
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
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        data?.map((ele, id) => {
          return <h1 key={id}>{ele.name}</h1>;
        })}
    </>
  );
}

export default UserPage;
