"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(JSON.stringify({ email, password }));

    // try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log(res)

      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json();
        setError(data.message || "Login failed");
      }
    // } catch (err) {
    //   setError(err instanceof Error ? err.message : String(err));
    // }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-96 bg-white shadow-2xl border-2 border-gray-300 rounded p-4">
        <h3 className="text-2xl font-bold text-center text-gray-900">Login</h3>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block font-medium text-gray-700 mb-1
                    "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 rounded w-full cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
