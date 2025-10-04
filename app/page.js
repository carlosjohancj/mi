"use client";

import { useLogin } from "../hook/useLogin";

export default function Home() {
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await login(data.username, data.password);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="border border-gray-300 p-2 rounded"
        />
        <button disabled={loading} type="submit" className="bg-blue-500 text-white p-2 rounded">
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </main>
  );
}
