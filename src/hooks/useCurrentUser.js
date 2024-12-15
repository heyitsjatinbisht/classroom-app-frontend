import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCurrentUser } from "../utils/auth";
import { useEffect } from "react";
import { addUser } from "../features/userSlice";

export const useCurrentUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

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
  useEffect(() => {
    getCurrentUser();
  }, [user, dispatch, navigate]);
};
