import { supabase } from "../lib/supabase/superbase";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();

  async function handleSignOut() {
    const res = await supabase.auth.signOut();
    console.log("object", res);

    if (res.error) {
      console.error("Logout Error:", res.error.message);
    } else {
      navigate("/");
    }
  }

  return (
    <div>
      {/* <h1>NavBar</h1>
      <button onClick={handleSignOut}>Logout</button> */}
      <div className="flex justify-between bg-blue-600 text-white px-4 py-3">
      <h1>NavBar</h1>

      <div className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/user">User</Link>
        <Link to="/table">Table</Link>
        <Link to="/todo">Todo</Link>
      </div>

      <button onClick={handleSignOut}>Logout</button>
    </div>
    </div>
  );
}

export default Navbar;





