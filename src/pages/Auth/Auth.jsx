import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Ui/Button";
import { UserContext } from "../../contact/UserContext";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  // LOGIN STATE
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({ email: "", password: "" });

  // SIGNUP STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Select Role",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const { setUser, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  // LOGIN HANDLER
  const handleLogin = (e) => {
    e.preventDefault();

    let newErrors = { email: "", password: "" };
    let hasError = false;

    if (!loginData.email) { newErrors.email = "Please enter your email."; hasError = true; }
    else if (!loginData.email.includes("@")) { newErrors.email = "Please enter a valid email."; hasError = true; }

    if (!loginData.password) { newErrors.password = "Please enter your password."; hasError = true; }
    else if (loginData.password.length < 6) { newErrors.password = "Password must be at least 6 characters."; hasError = true; }

    setLoginErrors(newErrors);

    if (!hasError) {
      // ADMIN LOGIN
      if (loginData.email === "admin@gmail.com" && loginData.password === "admin123") {
        setUser({ name: "Admin", email: "admin@gmail.com", role: "Administrator" });
        setLoggedIn(true);
        navigate("/dashboard");
      } else {
        setLoginErrors({ ...newErrors, password: "Invalid email or password!" });
      }
    }
  };

  // SIGNUP HANDLER
  const handleSignUp = (e) => {
    e.preventDefault();

    let newErrors = { name: "", email: "", password: "", role: "" };
    let hasError = false;

    if (!formData.name) { newErrors.name = "Please enter your name."; hasError = true; }
    if (!formData.email) { newErrors.email = "Please enter your email."; hasError = true; }
    else if (!formData.email.includes("@")) { newErrors.email = "Please enter a valid email."; hasError = true; }
    if (!formData.password) { newErrors.password = "Please enter your password."; hasError = true; }
    else if (formData.password.length < 6) { newErrors.password = "Password must be at least 6 characters."; hasError = true; }
    if (!formData.role || formData.role === "Select Role") { newErrors.role = "Please select a role."; hasError = true; }

    setErrors(newErrors);

    if (!hasError) {
      setUser(formData);
      setLoggedIn(true);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#010205] text-white relative px-6 flex flex-col">
      <div className="relative z-10 flex-grow flex items-center justify-center pt-24">

        {/* SIGN IN FORM */}
        {isSignIn ? (
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-xl w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {loginErrors.email && <p className="text-red-500 mt-1">{loginErrors.email}</p>}
              </div>

              <div>
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {loginErrors.password && <p className="text-red-500 mt-1">{loginErrors.password}</p>}
              </div>

              <Button title={"Sign In"} className="w-full py-2" />
            </form>

            <p className="text-center text-gray-400 mt-4">
              Don't have an account?{" "}
              <button
                onClick={() => { setIsSignIn(false); setLoginErrors({ email: "", password: "" }); }}
                className="text-blue-400 hover:underline font-semibold"
              >
                Sign Up
              </button>
            </p>
          </div>
        ) : (

          /* SIGN UP FORM */
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-xl w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block mb-2">Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option className="bg-[#0e0f12]">Select Role</option>
                  <option className="bg-[#0e0f12]">User</option>
                  <option className="bg-[#0e0f12]">Editor</option>
                  <option className="bg-[#0e0f12]">Administrator</option>
                </select>
                {errors.role && <p className="text-red-500 mt-1">{errors.role}</p>}
              </div>

              <Button title={"Sign Up"} className="w-full py-2" />
            </form>

            <p className="text-center text-gray-400 mt-4">
              Already have an account?{" "}
              <button
                onClick={() => { setIsSignIn(true); setErrors({ name: "", email: "", password: "", role: "" }); }}
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
