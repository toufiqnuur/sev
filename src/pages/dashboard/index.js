import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";

const data = [
  {
    name: "",
    visitor: 0,
  },
];

const user = "taufik2017yk@gmail.com";

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="lg:flex lg:flex-wrap">
      <Sidebar open={sidebar} onClose={() => setSidebar(false)} />

      {/* main */}
      <main className="flex-1 lg:ml-[250px]">
        <Header
          title="Dashboard"
          toggleSidebar={() => setSidebar(true)}
          user={user}
          onLogout={() => alert("")}
        />
        <div className="p-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full rounded-lg border bg-white p-6 shadow-md md:max-w-[250px]">
              <div className="text-4xl font-medium">19</div>
              <div className="mt-2 flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                <span>Total links</span>
              </div>
            </div>
            <div className="w-full rounded-lg border bg-white p-6 shadow-md md:max-w-[250px]">
              <div className="text-4xl font-medium">190</div>
              <div className="mt-2 flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-green-500"></div>
                <span>Visitor</span>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border bg-white  shadow-md">
            <h3 className="border-b py-4 px-6 font-medium lg:text-lg">
              Timeline
            </h3>
            <div className="h-96 py-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 24,
                    left: 8,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="visitor" stroke="#22c55e" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border bg-white shadow-md">
              <h3 className="border-b py-4 px-6 font-medium lg:text-lg">
                Latest Links added
              </h3>
              <div className="py-6">
                <div className="py-16 text-center">
                  <span className="text-4xl">&#x1f343;</span>
                  <h5 className="mt-2 text-xl font-semibold">
                    It&apos;s empty!
                  </h5>
                  <p className="text-gray-500">No data available</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white shadow-md">
              <h3 className="border-b py-4 px-6 font-medium lg:text-lg">
                Popular Links
              </h3>
              <div className="p-6">
                <div className="py-16 text-center">
                  <span className="text-4xl">&#x1f343;</span>
                  <h5 className="mt-2 text-xl font-semibold">
                    It&apos;s empty!
                  </h5>
                  <p className="text-gray-500">No data available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
