import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./features/user/page/UserPage.jsx";
import Dashboard from "./features/dashboard/page/Dashboard.jsx";
import SupabaseTable from "./features/supabase-table/page/SupabaseTable.jsx";
import Login from "./features/Login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/supabase-table" element={<SupabaseTable />} />
        <Route
          path="*"
          element={
            <>
              <h1>Not Found</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
