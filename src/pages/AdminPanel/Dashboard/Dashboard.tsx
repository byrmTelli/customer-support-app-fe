import { Pie, PieChart } from "recharts";
import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import { apiAdmin } from "../../../store/api/enhances/enhancedApiAdmin";
import { DashboardViewModel } from "../../../store/api/generated/generatedApiAdmin";
import DashboardCard from "./DashboardCard/DashboardCard";
import DashboardTabs from "./DashboardTabs/DashboardTabs";
import MonthlySupportRequestsBarChart from "./MonthlySupportRequestBarChart/MonthlySupportRequestBarChart";
import { PiUsersFourLight } from "react-icons/pi";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

export default function Dashboard() {
  // States
  const getDashBoardData = apiAdmin.useGetApiAdminGetDashboardStatsQuery();
  const dashboardData =
    getDashBoardData.data?.data ?? ({} as DashboardViewModel);

  return (
    <div className=" p-4">
      <BreadCrum />
      <div className="w-full grid grid-rows-4 md:grid-rows-5 2xl:grid-rows-3 grid-cols-5 gap-2">
        <div className="row-span-1 col-span-5 2xl:col-span-3 grid md:grid-cols-3  gap-2">
          <DashboardCard
            title="Users"
            score={dashboardData.userCount ?? 0}
            hint="Total user count."
            icon={<PiUsersFourLight />}
            className="grid grid-rows-4 xl:col-span-1 xl:row-span-2 p-2 place-items-center justify-center"
          />
          <DashboardCard
            title="Customers"
            score={dashboardData.customerCount ?? 0}
            hint="Total user count."
            icon={<PiUsersFourLight />}
            className="grid grid-rows-4 xl:col-span-1 xl:row-span-2 p-2 place-items-center justify-center"
          />
          <DashboardCard
            title="Tickets"
            score={dashboardData.ticketCount ?? 0}
            hint="Total user count."
            icon={<PiUsersFourLight />}
            className="grid grid-rows-4 xl:col-span-1 xl:row-span-2 p-2 place-items-center justify-center"
          />
        </div>
        <div className="border border-gray-400 col-span-5 2xl:col-span-2 md:row-span-2 2xl:row-span-3  rounded-lg">
          <DashboardTabs />
        </div>
        <div className="border border-gray-400 md:row-span-2  col-span-5 2xl:col-span-3 2xl:row-span-2  rounded-lg">
          <MonthlySupportRequestsBarChart
            data={dashboardData.monthlySupportRequests ?? []}
          />
        </div>
        <div className="border row-span-1 grid grid-cols-1  sm:grid-cols-2 border-gray-400 col-span-5 2xl:col-span-3 rounded-lg">
          <div className="flex items-center justify-center">
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div>
          <div className="flex items-center justify-center">
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div>
        </div>
        <div className="border row-span-1 grid grid-cols-1  sm:grid-cols-2 border-gray-400 col-span-5 2xl:col-span-2 rounded-lg">
          <div className="flex items-center justify-center">
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div>
          <div className="flex items-center justify-center">
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}
