import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

export default function Header({ toggleSidebar, title, user, onLogout }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b bg-white lg:px-4">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="p-4 lg:hidden">
          <IoIosMenu size={32} />
        </button>
        <Link href="/dashboard" className="lg:hidden">
          <Image
            src="/logo.png"
            className="-mb-2"
            width={40}
            height={30}
            alt=""
          />
        </Link>
        <h1 className="hidden text-xl font-medium lg:block">{title}</h1>
      </div>
      <Popover>
        <Popover.Button className="my-1.5 mr-4 lg:mr-0">
          <Image src="/favicon.ico" width={36} height={36} alt="" />
        </Popover.Button>
        <Popover.Panel className="absolute right-4 mt-4 w-56 origin-top-right rounded-md border bg-white px-4 py-3 text-sm shadow-lg">
          <h5 className="font-semibold text-gray-500">Account</h5>
          <p className="mt-1">{user}</p>
          <button
            onClick={onLogout}
            className="mt-2 mb-1 rounded-lg bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow shadow-blue-600/50"
          >
            log out
          </button>
        </Popover.Panel>
      </Popover>
    </header>
  );
}
