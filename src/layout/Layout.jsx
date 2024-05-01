import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Layout() {
  const location = useLocation();
  const path = location.pathname;
  const pathDinamic = path.split("/").slice(2).join("/");
  const pathFilter = [`/chat/${pathDinamic}`, `/profile/${pathDinamic}`];
  const isVisible = !pathFilter.includes(path);

  return (
    <>
      <ScrollRestoration />
      {isVisible && <Navbar />}
      <main className="w-screen h-screen">
        <Outlet />
      </main>
    </>
  );
}
