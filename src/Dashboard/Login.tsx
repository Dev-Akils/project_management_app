import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

        <input
          type="password"
          placeholder="Password-123456"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
