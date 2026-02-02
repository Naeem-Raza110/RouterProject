import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Ui/Button";
const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin123") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen bg-[#010205] text-white relative px-6 flex flex-col">
      <div className="relative z-10 flex-grow flex items-center justify-center pt-24">
        {/* Sign In Form */}
        {isSignIn ? (
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-xl w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button title={"Sign In"} className="w-full py-2 " />
            </form>

            <p className="text-center text-gray-400 mt-4">
              Don't have an account?{" "}
              <button
                onClick={() => setIsSignIn(false)}
                className="text-blue-400 hover:underline font-semibold"
              >
                Sign Up
              </button>
            </p>
          </div>
        ) : (
          /* Sign Up Form */
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-xl w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

            <form className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button title={"Sign Up"} className="w-full py-2  " />
            </form>

            <p className="text-center text-gray-400 mt-4">
              Already have an account?{" "}
              <button
                onClick={() => setIsSignIn(true)}
                className="text-blue-400 hover:underline font-semibold"
              >
                Sign In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
