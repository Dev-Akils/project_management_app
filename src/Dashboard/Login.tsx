import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Dummy credentials (you can replace with API later)
  const correctUser = "admin";
  const correctPass = "123456";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === correctUser && password === correctPass) {
      const userData = {
        username,
        loginTime: new Date().toISOString(),
      };

      sessionStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } else {
      setError("Invalid Username or Password");
    }
  };
  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Back button clicked"); // Check your console!

    // Try a direct path instead of -1 just to verify it works
    navigate("/", { replace: true });
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80 "
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Username-admin"
          className="w-full border p-2 rounded mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* 2. Wrapped Password Input */}
        <div className="relative w-full mb-4">
          <input
            type={showPassword ? "text" : "password"} // 3. Dynamic type
            placeholder="Password-123456"
            className="w-full border p-2 rounded outline-none focus:ring-1 focus:ring-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 text-sm"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <div className="flex gap-2 text-[14px]">
          <button
            type="submit"
            className="w-full  bg-gray-700 text-white py-2
           rounded hover:bg-gray-800 "
          >
            Login
          </button>
          <button
            onClick={handleGoBack}
            type="button"
            className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
