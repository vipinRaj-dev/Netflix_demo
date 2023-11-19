import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FrontPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [bool, setBool] = useState(false);

  const navigate = useNavigate();

  const loginHardCoded = {
    username: "vipin@123",
    password: "12345",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username === loginHardCoded.username &&
      password === loginHardCoded.password
    ) {
      navigate("/home");
    } else {
      setBool(true);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {bool ? (
            <h6 className="text-red-700 text-center">invalid login</h6>
          ) : null}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FrontPage;
