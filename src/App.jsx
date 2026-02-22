import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./features/user/page/UserPage.jsx";
import Dashboard from "./features/dashboard/page/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Login</h1>
            </>
          }
        />
        <Route path="/user" element={<UserPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
