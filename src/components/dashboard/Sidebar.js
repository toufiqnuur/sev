import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosClose, IoIosLink, IoIosSpeedometer } from "react-icons/io";

const NavLink = ({ href, icon, children }) => {
  const router = useRouter();

  return (
    <Link
      className={`${
        router.asPath === href &&
        "bg-blue-600 text-white shadow-md shadow-blue-600/50"
      } flex items-center space-x-4 rounded-lg px-4 py-2 text-lg hover:bg-blue-50 lg:text-xl`}
      href={href}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
};

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`${
          open ? "block" : "hidden"
        } fixed top-0 left-0 z-20 h-screen w-screen bg-black/25 backdrop-blur-sm lg:hidden`}
      ></div>

      <aside
        className={`${
          !open && "-translate-x-full"
        } fixed top-0 left-0 z-50 grid h-screen w-3/4 grid-rows-2 border-r bg-white md:w-1/4 lg:w-[250px] lg:translate-x-0`}
      >
        <div>
          <header className="flex h-16 items-center justify-between border-b bg-gray-200">
            <Image
              className="m-4"
              src="/logo.png"
              width={40}
              height={30}
              alt=""
            />
            <button
              onClick={onClose}
              className="m-2 rounded bg-white text-blue-600 lg:hidden"
            >
              <IoIosClose size={32} />
            </button>
          </header>
          <nav className="space-y-2 py-4 px-2">
            <NavLink href="/dashboard" icon={<IoIosSpeedometer size={24} />}>
              Dashboard
            </NavLink>
            <NavLink href="/dashboard/links" icon={<IoIosLink size={24} />}>
              Links
            </NavLink>
          </nav>
        </div>
        <footer className="w-full place-self-end border-t bg-gray-50 p-6">
          <div>&copy; {new Date().getFullYear()} sev.my.id</div>
        </footer>
      </aside>
    </>
  );
}
