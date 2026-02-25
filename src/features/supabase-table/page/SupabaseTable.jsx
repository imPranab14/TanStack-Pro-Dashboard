import React, { useEffect, useState } from "react";
import userListAPI from "../api/api";
//import { useQuery } from "@tanstack/react-query";

function SupabaseTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [pageLimit, setPageLimit] = useState(5);
  //List User API Call
  async function fetchUserList(fromRange, toRange) {
    try {
      setIsLoading(true);
      const response = await userListAPI(fromRange, toRange);
      console.log("res", response);
      setData(response);
      return response || [];
    } catch (error) {
      console.log("list of user error", error);
    } finally {
      setIsLoading(false);
    }
  }
  console.log("loading", isLoading);

  //   const { data: userListData, isLoading, } = useQuery({
  //     queryKey: ["user_list"],
  //     queryFn: fetchUserList,
  //   });
  //console.log("data", userListData);

  //Call API Function
  useEffect(() => {
    fetchUserList(count, count + pageLimit);
  }, [count]);

  //console.log("data", data, isLoading);
  console.log("Page_Count", count);

  return (
    <>
      <h1>SupabaseTable</h1>

      {/* user list table */}

      <>
        <p>
          count {data?.count} page limit {pageLimit}
        </p>
        <h1>page count {count}</h1>
        <div className="flex gap-2">
          <button
            className="bg-blue-200"
            disabled={count === 0}
            onClick={() => setCount((pre) => pre - pageLimit)}
          >
            Previous
          </button>
          <button onClick={() => setCount((pre) => pre + pageLimit)}>
            Next
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>email</th>
              <th>gender</th>
              <th>ip_address</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <h1>Loading...</h1>}
            {Array.isArray(data.data) &&
              data?.data?.map((ele, index) => {
                // const tableHeader=Object.keys(ele)
                // console.log("tableHeader",tableHeader);
                return (
                  <>
                    <tr key={index}>
                      <td>{ele?.id}</td>
                      <td>{ele?.first_name}</td>
                      <td>{ele?.last_name}</td>
                      <td>{ele?.email}</td>
                      <td>{ele?.gender}</td>
                      <td>{ele?.ip_address}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </>
    </>
  );
}

export default SupabaseTable;
