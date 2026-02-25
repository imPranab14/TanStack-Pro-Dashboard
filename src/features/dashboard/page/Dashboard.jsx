import React from "react";
import dashboardApi from "../api/dashboard.api.js";
import { useQuery } from "@tanstack/react-query";

function Dashboard() {
  //Dashboard API Function
  async function fetchDashboard() {
    try {
      const response = await dashboardApi();
      return response.data || [];
    } catch (error) {
      console.log("Dashboard api fetch api error", error);
      throw error;
    }
  }

  //Tanstack Query
  const { data: dashboardData, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
    refetchInterval: 5 * 1000, //Refetch in every 5 sec
  });
  console.log("data", dashboardData);
  return (
    <>
      <h1>Dashboard</h1>
      {isLoading && <h1>Loading...</h1>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!isLoading &&
          Array.isArray(dashboardData) &&
          dashboardData?.map((ele, id) => {
            return (
              <div
                key={id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    #{ele.Ticket_ID ?? "NA"}
                  </h2>

                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full capitalize
        ${
          ele.Status?.toLowerCase() === "open"
            ? "bg-blue-100 text-blue-700"
            : ele.Status?.toLowerCase() === "closed"
              ? "bg-green-100 text-green-700"
              : ele.Status?.toLowerCase() === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-100 text-gray-600"
        }
      `}
                  >
                    {ele.Status ?? "NA"}
                  </span>
                </div>

                {/* Body */}
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">Customer</span>
                    <span>{ele.Customer_Name ?? "NA"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">Agent</span>
                    <span>{ele.Agent_Name ?? "NA"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">Created</span>
                    <span>{ele.Date_Created ?? "NA"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">Category</span>
                    <span>{ele.Category ?? "NA"}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Priority</span>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full capitalize
          ${
            ele.Priority?.toLowerCase() === "high"
              ? "bg-red-100 text-red-700"
              : ele.Priority?.toLowerCase() === "medium"
                ? "bg-yellow-100 text-yellow-700"
                : ele.Priority?.toLowerCase() === "low"
                  ? "bg-sky-100 text-sky-700"
                  : "bg-gray-100 text-gray-600"
          }
        `}
                    >
                      {ele.Priority ?? "NA"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">CSAT</span>
                    <span className="font-semibold text-yellow-500">
                      ⭐ {ele.CSAT_Score ?? "NA"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Dashboard;
