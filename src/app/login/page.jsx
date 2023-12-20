"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      ...data,
      redirect: false,
    });

    router.push("/dashboard");
  };

  return (
    <section className="mt-8">
      <h1 className="font-semibold text-primary text-center">
        Login to your account
      </h1>
      <form className="max-w-xs mx-auto" onSubmit={loginUser}>
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
        <button type="submit">Login</button>
        <div className="my-2 text-center text-gray-500">
          or login with provider
        </div>
        <button
          className="flex gap-4 justify-center"
          onClick={() => signIn("google")}
        >
          <Image src={"/google.png"} width={"24"} height={"24"} alt={""} />
          Sign in with Google
        </button>
      </form>
    </section>
  );
}
