import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="flex gap-4 my-8 mx-12">
        <h1 className="font-semibold text-primary">NextAuth</h1>
        <nav className="flex gap-4 text-center font-semibold text-primary">
          <Link href="/register" className="">
            Register
          </Link>
          <Link href="/login" className="">
            Login
          </Link>
        </nav>
      </section>
    </main>
  );
}
