import React from "react";
import userListAPI from "../api/api";
import { useQuery } from "@tanstack/react-query";

function SupabaseTable() {
  //List User API Call
  async function fetchUserList() {
    try {
      const response = await userListAPI();
      return response?.data || [];
    } catch (error) {
      console.log("list of user error", error);
    }
  }

  const { data: userListData, isLoading } = useQuery({
    queryKey: ["user_list"],
    queryFn: fetchUserList,
  });

  console.log("data", userListData);

  return (
    <>
      <h1>SupabaseTable</h1>
      {isLoading && <h1>Loading...</h1>}

      {/* user list table */}
      {!isLoading && 
      <div>
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
            {Array.isArray(userListData) &&
              userListData?.map((ele, index) => {
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
      </div>
}
    </>
  );
}

export default SupabaseTable;
