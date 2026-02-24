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
      <h4>Dashboard</h4>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        Array.isArray(dashboardData) &&
        dashboardData?.map((ele, id) => {
          return (
            <div key={id} style={{ border: "1px solid red" }}>
              <p>{ele.Ticket_ID ?? "NA"}</p>
              <p>{ele.Date_Created ?? "NA"}</p>
              <p>{ele.Customer_Name ?? "NA"}</p>
              <p>{ele.Agent_Name ?? "NA"}</p>
              <p>{ele.CSAT_Score ?? "NA"}</p>
              <p>{ele.Category ?? "NA"}</p>
              <p>{ele.Priority ?? "NA"}</p>
              <p>{ele.Status ?? "NA"}</p>
            </div>
          );
        })}
    </>
  );
}

export default Dashboard;
