// src/components/Navbar.jsx
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg z-50 text-white">
      <h1 className="text-xl font-semibold drop-shadow-lg">
        Todo Glass UI ✨
      </h1>

      {user && (
        <div className="flex items-center gap-4">
          <img
            src={user.photoURL}
            alt="User"
            className="w-8 h-8 rounded-full border border-white/30 shadow-md"
          />
          <button
            onClick={logout}
            className="bg-white text-gray-700 px-4 py-1.5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
