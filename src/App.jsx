import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./features/user/page/UserPage.jsx";
import Dashboard from "./features/dashboard/page/Dashboard.jsx";
import SupabaseTable from "./features/supabase-table/page/SupabaseTable.jsx";
import Todo from "./features/todo/Todo.jsx";
import AuthPage from "./features/Auth/AuthPage.jsx";
import ProtectedRoute from "./ProtectedRouted.jsx";
import AppRouter from "./routes/AppRoutes.jsx";

function App() {
  return (
    <AppRouter/>
  );
}

export default App;
