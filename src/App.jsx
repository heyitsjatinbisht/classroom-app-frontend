import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PrincipalDashboard from "./pages/PrincipalDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Layout from "./Layout";

const App = () => {
  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
  const user = getUserFromLocalStorage();
  const userRole = user ? user.role : null;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout role={userRole} />}>
          <Route
            path="/principal-dashboard/*"
            element={<PrincipalDashboard />}
          />
          <Route path="/teacher-dashboard/*" element={<TeacherDashboard />} />
          <Route path="/student-dashboard/*" element={<StudentDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
