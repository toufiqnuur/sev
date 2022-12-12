import Link from "next/link";
import Container from "./Container";
import { IoMdLogIn } from "react-icons/io";

export default function Header() {
  return (
    <header>
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          sev.
        </Link>
        <Link
          href="/auth/signin"
          className="flex items-center space-x-3 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white focus:outline-blue-300"
        >
          <IoMdLogIn />
          <span>Masuk</span>
        </Link>
      </Container>
    </header>
  );
}
