"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });

    const userInfo = await response.json();
    console.log(userInfo);
    router.push("/login");
  };

  return (
    <section className="mt-8">
      <h1 className="font-semibold text-primary text-center">
        Register for an account
      </h1>
      <form className="max-w-xs mx-auto" onSubmit={registerUser}>
        <input
          type="text"
          placeholder="username"
          value={data.username}
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="me@email.com"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}
