// src/pages/Login.jsx
import { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Google Sign-In failed:", error.message);
      alert("Google Sign-In failed. Please try again.");
    }
  };

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 w-[90%] max-w-md text-center transition-all duration-300 hover:shadow-blue-500/20">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50 blur-3xl -z-10"></div>

        <img
          src="/logo.png"
          alt="Todo Glass UI"
          className="w-20 h-20 mx-auto mb-6 drop-shadow-lg animate-fade-in"
        />

        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
          Welcome Back 👋
        </h1>
        <p className="text-white/80 mb-8">
          Sign in with Google to access your personal to-do dashboard.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 bg-white text-gray-700 font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all mx-auto"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-6 h-6"
          />
          Sign in with Google
        </button>

        <p className="mt-8 text-sm text-white/70">
          © {new Date().getFullYear()} Todo Glass UI — All rights reserved.
        </p>
      </div>
    </div>
  );
}
