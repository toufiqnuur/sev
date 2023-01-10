import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./Container";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <Container className="flex items-center justify-between py-6 lg:max-w-screen-xl">
        <Link href="/" className="-mt-4 text-5xl font-semibold">
          s<span className="rounded-xl border-b-4 border-blue-600">v.</span>
        </Link>
        <div>
          <button
            onClick={() => router.push("/login")}
            className="easy-in-out rounded-2xl bg-white px-4 py-2 text-lg font-medium text-blue-600 shadow-lg shadow-blue-600/20 transition delay-100 duration-300 hover:-translate-y-1 md:px-6 md:py-3 md:text-xl"
          >
            Login
          </button>
        </div>
      </Container>
    </header>
  );
}
