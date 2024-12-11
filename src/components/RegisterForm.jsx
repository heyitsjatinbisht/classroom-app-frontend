import React, { useState, useEffect } from "react";
import { registerUser, fetchCurrentUser } from "../utils/auth";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Teacher");
  const [isPrincipal, setIsPrincipal] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const userData = await fetchCurrentUser(); // Fetch current user data directly
        if (userData && userData.role === "Principal") {
          setIsPrincipal(true);
        }
      } catch (error) {
        console.error("Failed to fetch current user:", error.message);
      }
    };

    checkUserRole();
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      registerUser({ fullName, email, password, role });
      toast.success("Registration successful!");

      // Reset form fields after successful registration
      setFullName("");
      setEmail("");
      setPassword("");
      setRole("Student");
    } catch (err) {
      setError(err.message || "An error occurred");
      toast.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {isPrincipal && (
            <div className="mb-6">
              <label className="block text-gray-700">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </select>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
