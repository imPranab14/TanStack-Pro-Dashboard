import TailwindNavbar from "@/components/ui/TailwindNavbar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
    <TailwindNavbar/>
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}