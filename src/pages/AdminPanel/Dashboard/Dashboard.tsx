import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import DashboardCard from "./DashboardCard/DashboardCard";
import MonthlyPieCharts from "./MonthlyPieCharts/MonthlyPieCharts";
import MonthlySupportRequestsBarChart from "./MonthlySupportRequestBarChart/MonthlySupportRequestBarChart";
import { PiUsersFourLight } from "react-icons/pi";
export default function Dashboard() {
  return (
    <div className="w-full p-4">
      <BreadCrum />
      <div className=""></div>
      <div className="w-full grid grid-cols-3 grid-rows-5 gap-2">
        <DashboardCard
          title="Users"
          score="60"
          hint="Total user count."
          icon={<PiUsersFourLight />}
          className="flex flex-col items-center justify-center h-full"
        />
        <DashboardCard
          title="Customers"
          score="6009"
          hint="Total user count."
          icon={<PiUsersFourLight />}
          className="flex flex-col items-center justify-center h-full"
        />
        <DashboardCard
          title="Tickets"
          score="60k"
          hint="Total user count."
          icon={<PiUsersFourLight />}
          className="flex flex-col items-center justify-center h-full"
        />
        <div className="border border-gray-400 col-span-3 row-span-2 p-4">
          <div className="p-4">
            <MonthlyPieCharts />
          </div>
        </div>
        <div className="border border-gray-400 col-span-3 row-span-2">
          <MonthlySupportRequestsBarChart />
        </div>
      </div>
    </div>
  );
}
