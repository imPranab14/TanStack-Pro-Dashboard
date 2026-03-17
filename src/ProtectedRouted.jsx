import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../src/lib/supabase/superbase.js"
import { useEffect, useState } from "react";

function ProtectedRoute() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    }

    checkSession();
  }, []);

  if (loading) return <p>Loading...</p>;

  return session ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;