import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../src/lib/supabase/superbase.js"
import { useEffect, useState } from "react";

function ProtectedRoute({children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  //Get Session in every page reload
  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    }

    checkSession();
  }, []);

  if (loading) return <p>Loading...</p>;

  return session ? children  : <Navigate to="/" />;
}

export default ProtectedRoute;