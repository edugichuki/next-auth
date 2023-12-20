"use client";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi {session?.user.username}</p>
    </div>
  );
}
