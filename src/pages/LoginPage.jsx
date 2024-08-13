import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Classroom Management App</h1>
      </header>
      <main className="flex-grow flex justify-center items-center py-8 px-4">
        <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <LoginForm />
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Classroom Management App</p>
      </footer>
    </div>
  );
};

export default LoginPage;
