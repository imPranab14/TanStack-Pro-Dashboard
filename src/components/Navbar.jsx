import { supabase } from "../lib/supabase/superbase";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  async function handleSignOut() {
    const res = await supabase.auth.signOut();
    console.log("object", res);

    if (res.error) {
      console.error("Logout Error:", error.message);
    } else {
      navigate("/");
    }
  }

  return (
    <div className="flex justify-between bg-blue-600 text-white px-4 py-3">
      <h1>NavBar</h1>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
}

export default Navbar;
