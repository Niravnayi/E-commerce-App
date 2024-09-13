import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  });

  const authApiCall = async (url, data, form) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData || "Registration failed");
      }

      const result = await response.json();
      localStorage.setItem("user", JSON.stringify(result));
      setUser(result);

      // Optionally, you can navigate to a success page or login page
    } catch (error) {
      form.setError("root", {
        type: "manual",
        message: error.message || "An error occurred during login",
      });
    }
  };

  const login = (data, form) => {
    authApiCall(
      "http://localhost:3000/login",
      {
        email: data.email,
        password: data.password,
      },
      form
    );
  };

  const register = (data, form) => {
    authApiCall(
      "http://localhost:3000/register",
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      form
    );
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, register, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
