import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./utils/auth";
import { addUser } from "./features/userSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        if (!user) {
          const fetchedUser = await fetchCurrentUser();
          dispatch(addUser(fetchedUser));
        }
      } catch (error) {
        if (error.response.request.status === 401) {
          navigate("/");
        }
      }
    };

    getCurrentUser();
  }, [user, dispatch]);

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
