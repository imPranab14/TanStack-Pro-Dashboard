import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../features/dashboard/page/Dashboard.jsx";
import SupabaseTable from "../features/supabase-table/page/SupabaseTable.jsx";
import Todo from "../features/todo/Todo.jsx";
import AuthPage from "../features/Auth/AuthPage.jsx";
import ProtectedRoute from "../ProtectedRouted";
import UserPage from "../features/user/page/UserPage.jsx";
import AppLayout from "../layout/AppLayout.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Not Protected Routed */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<AuthPage />} />
          <Route
            path="*"
            element={
              <>
                <h1>Not Found</h1>
              </>
            }
          />
        </Route>

        {/* Protected Routed */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/table" element={<SupabaseTable />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
