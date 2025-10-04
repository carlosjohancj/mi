import { useState } from "react";
import axios from "axios";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/auth", { username, password });
      setUser(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, user };
}