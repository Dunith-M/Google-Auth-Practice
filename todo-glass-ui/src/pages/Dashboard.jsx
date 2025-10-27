// src/pages/Dashboard.jsx
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white text-center relative">
      <Navbar />

      <div className="mt-24 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 w-[90%] max-w-md text-center">
        <img
          src={user?.photoURL}
          alt="User"
          className="w-20 h-20 rounded-full mb-4 border-4 border-white/40 shadow-lg mx-auto"
        />
        <h1 className="text-3xl font-bold mb-2 drop-shadow-md">
          Hello, {user?.displayName || "Guest"} 👋
        </h1>
        <p className="mb-6 opacity-90">{user?.email}</p>
        <p className="text-white/70 mt-6">
          Welcome to your personalized to-do dashboard! 🚀
        </p>
      </div>
    </div>
  );
}
