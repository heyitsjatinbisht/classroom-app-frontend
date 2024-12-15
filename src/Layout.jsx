import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCurrentUser } from "./hooks/useCurrentUser";

const Layout = () => {
  useCurrentUser();
  const user = useSelector((store) => store.user);

  return (
    <div>
      <Navbar role={user?.role} />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
