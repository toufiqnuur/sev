import { useState } from "react";
import {
  IoIosCopy,
  IoIosLock,
  IoIosSearch,
  IoIosTime,
  IoMdCreate,
} from "react-icons/io";
import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";

const user = "taufik2017yk@gmail.com";

export default function DashboardLinks() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="lg:flex lg:flex-wrap">
      <Sidebar open={sidebar} onClose={() => setSidebar(false)} />
      <main className="flex-1 lg:ml-[250px]">
        <Header
          title="Links"
          toggleSidebar={() => setSidebar(true)}
          user={user}
          onLogout={() => 0}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold lg:text-xl">Create New</h3>
          <form className="mt-4 flex w-full max-w-4xl items-center space-x-4">
            <input
              type="url"
              placeholder="https://domain.id/very-long-link "
              className="form-input flex-1 rounded-lg"
            />
            <button
              className="rounded-lg bg-blue-600 py-2 px-4 font-medium text-white shadow-md shadow-blue-600/50"
              type="submit"
            >
              Shorten
            </button>
          </form>
          <div className="mt-6 max-w-4xl md:flex md:items-center md:justify-between">
            <h3 className="text-lg font-semibold lg:text-xl">
              Latest Generated Links
            </h3>
            <form className="relative mt-4 w-full md:mt-0 md:max-w-[250px]">
              <input
                type="url"
                placeholder="Search "
                className="form-input w-full flex-1 rounded-lg py-1 px-2"
              />
              <button
                className="absolute right-0 top-0 rounded-lg p-2 text-gray-500"
                type="submit"
              >
                <IoIosSearch size={20} />
              </button>
            </form>
          </div>
          <div className="mt-4 max-w-4xl space-y-4">
            <div className="rounded-lg border bg-white p-4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold lg:text-2xl">
                  <span className="text-blue-600">sev</span>.my.id/custom
                </div>
                <div className="space-x-2">
                  <button className="rounded-lg bg-gray-100 p-2 text-gray-600">
                    <IoMdCreate />
                  </button>
                  <button className="rounded-lg bg-gray-100 p-2 text-gray-600">
                    <IoIosCopy />
                  </button>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500 lg:text-base">
                https://yourdomain.id/paths/category/209/cara-menyingkat-url-menjadi-lebih-simpel.html
              </div>
              <div className="mt-2 flex items-center justify-between border-t pt-2 text-gray-600">
                <span className="text-sm lg:text-base">10 Januari 2023</span>
                <div className="space-x-2">
                  <button className="rounded-lg bg-gray-100 p-2 text-gray-600">
                    <IoIosTime />
                  </button>
                  <button className="rounded-lg bg-gray-100 p-2 text-gray-600">
                    <IoIosLock />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
