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
  <div className="min-h-screen bg-gray-100 p-2">
    <div className="max-w-6xl mx-auto bg-white shadow-sm rounded-2xl p-2">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Users Table
        </h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            Page: {count / pageLimit + 1}
          </span>

          <button
            disabled={count === 0}
            onClick={() => setCount((pre) => pre - pageLimit)}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          <button
            onClick={() => setCount((pre) => pre + pageLimit)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Next
          </button>
          <div>
            <p>Total Users: {data?.count || 0}</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">First Name</th>
              <th className="px-6 py-3">Last Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">IP Address</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {isLoading ? (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  Loading users...
                </td>
              </tr>
            ) : Array.isArray(data?.data) && data?.data.length > 0 ? (
              data.data.map((ele) => (
                <tr
                  key={ele.id}
                  //className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{ele.id}</td>
                  <td className="px-6 py-4">{ele.first_name}</td>
                  <td className="px-6 py-4">{ele.last_name}</td>
                  <td className="px-6 py-4 text-blue-600">
                    {ele.email}
                  </td>
                  <td className="px-6 py-4">{ele.gender}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {ele.ip_address}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-400">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

     
    </div>
  </div>
);
}

export default SupabaseTable;
