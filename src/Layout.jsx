import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { fetchCurrentUser } from "./features/userSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserRole = async () => {
      try {
        const user = await dispatch(fetchCurrentUser()).unwrap();
        setRole(user.role);
      } catch (error) {
        console.error("Failed to fetch user role:", error);
      }
    };

    getUserRole();
  }, [dispatch]);

  return (
    <div>
      <Navbar role={role} />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
