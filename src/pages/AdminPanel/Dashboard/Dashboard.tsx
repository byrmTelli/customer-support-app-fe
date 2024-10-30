import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import { apiAdmin } from "../../../store/api/enhances/enhancedApiAdmin";
import { DashboardViewModel } from "../../../store/api/generated/generatedApiAdmin";
import DashboardCard from "./DashboardCard/DashboardCard";
import MonthlySupportRequestsBarChart from "./MonthlySupportRequestBarChart/MonthlySupportRequestBarChart";
import { PiUsersFourLight } from "react-icons/pi";
export default function Dashboard() {
  // States
  const getDashBoardData = apiAdmin.useGetApiAdminGetDashboardStatsQuery();
  const dashboardData =
    getDashBoardData.data?.data ?? ({} as DashboardViewModel);
  console.log(dashboardData);

  return (
    <div className="w-full h-full flex flex-col p-4">
      <BreadCrum />
      <div className="w-full h-full grid grid-cols-3 grid-rows-4 gap-2">
        <DashboardCard
          title="Users"
          score={dashboardData.userCount ?? 0}
          hint="Total user count."
          icon={<PiUsersFourLight />}
          className="flex flex-col items-center justify-center h-full"
        />
        <DashboardCard
          title="Customers"
          score={dashboardData.customerCount ?? 0}
          hint="Total user count."
          icon={<PiUsersFourLight />}
          className="flex flex-col items-center justify-center h-full"
        />
        <DashboardCard
          title="Tickets"
          score={dashboardData.ticketCount ?? 0}
          hint="Total user count."
          icon={<PiUsersFourLight />}
          className="flex flex-col items-center justify-center h-full"
        />
        {/* <div className="border border-gray-400 col-span-3 row-span-2 p-4">
          <div className="p-4">
            <MonthlyPieCharts />
          </div>
        </div> */}
        <div className="border border-gray-400 col-span-3 row-span-2">
          <MonthlySupportRequestsBarChart
            data={dashboardData.monthlySupportRequests ?? []}
          />
        </div>
      </div>
    </div>
  );
}
