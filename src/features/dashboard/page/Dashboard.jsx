import React from "react";
import dashboardApi from "../api/dashboard.api";
import { useQuery } from "@tanstack/react-query";

function Dashboard() {
  //Dashboard API Function
  async function fetchDashboard() {
    try {
      const response = await dashboardApi();
      return response.data || [];
    } catch (error) {
      throw error;
    }
  }

  //Tanstack Query
  const { data: dashboardData, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
  });
  console.log("data", dashboardData);
  return (
    <>
      <h4>Dashboard</h4>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        Array.isArray(dashboardData) &&
        dashboardData?.map((ele, id) => {
          return (
            <div key={id}>
              <p>{ele.Ticket_ID ?? "NA"}</p>
            </div>
          );
        })}
    </>
  );
}

export default Dashboard;
