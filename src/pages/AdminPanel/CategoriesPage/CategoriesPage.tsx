import { useNavigate, useParams } from "react-router-dom";
import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiCategory } from "../../../store/api/enhances/enhancedApiCategory";
import DashboardCard from "../Dashboard/DashboardCard/DashboardCard";
import MonthlyPieCharts from "../Dashboard/MonthlyPieCharts/MonthlyPieCharts";
import MonthlySupportRequestsBarChart from "../Dashboard/MonthlySupportRequestBarChart/MonthlySupportRequestBarChart";
import { apiAdmin } from "../../../store/api/enhances/enhancedApiAdmin";
import { CategoriesPageViewModel } from "../../../store/api/generated/generatedApiAdmin";
import InspectButton from "../../../components/Buttons/InspectButton/InspectButton";
import DeleteButton from "../../../components/Buttons/DeleteButton/DeleteButton";

export default function CategoriesPage() {
  // States
  const pathname = useParams();
  const navigate = useNavigate();
  // Queries
  const categoriesQuery = apiCategory.useGetApiCategoryGetCategoriesQuery();
  const categoryData = categoriesQuery.data?.data ?? [];

  const getCategoriesPageStatisticsQuery =
    apiAdmin.useGetApiAdminGetCategoriesPageStatisticsQuery({
      categoryId: Number(pathname.id),
    });

  const categoriesPageStatisticsData =
    getCategoriesPageStatisticsQuery.data?.data ??
    ({} as CategoriesPageViewModel);
  // Form

  return (
    <div className="w-full flex flex-col">
      <div className="bg-teal-600 h-full grid grid-cols-10 py-1">
        {categoryData.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/admin/categories/${item.id}`)}
            className="w-full flex items-center gap-1 justify-center text-gray-200 font-semibold hover:bg-teal-700 border-r border-gray-200 "
          >
            <p className="text-center text-sm p-2">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 p-4">
        <BreadCrum />
        <div className="w-full border-b border-gray-400 pb-2">
          <h1 className="text-2xl font-semibold py-2 pl-1 select-none">
            {categoriesPageStatisticsData.category?.name ?? ""}
          </h1>
        </div>
        <div className="w-full bg-teal-600 text-gray-200 py-4">
          <h1 className="font-semibold text-xl pl-4">Stats</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="w-full col-span-4 grid grid-cols-2 gap-4">
            <DashboardCard
              title="Completeds"
              score={categoriesPageStatisticsData.completedTicketCount ?? 0}
              icon={<div></div>}
              hint="Completed ticket count OVERALL"
              className="grid grid-row-4 p-4 gap-4 place-items-center justify-center h-full"
            />
            <DashboardCard
              title="Waitings"
              score={categoriesPageStatisticsData.waitingTicketCount ?? 0}
              icon={<div></div>}
              hint="Waiting ticket count OVERALL"
              className="grid grid-row-4 p-4 gap-4 place-items-center justify-center h-full"
            />
            <DashboardCard
              title="Pendings"
              score={categoriesPageStatisticsData.pendingTicketCount ?? 0}
              icon={<div></div>}
              hint="Pendings ticket count OVERALL"
              className="grid grid-row-4 p-4 gap-4 place-items-center justify-center h-full"
            />
            <DashboardCard
              title="Cancelleds"
              score={categoriesPageStatisticsData.cancelledTicketCount ?? 0}
              icon={<div></div>}
              hint="Cancelled ticket count OVERALL"
              className="grid grid-row-4 p-4 gap-4 place-items-center justify-center h-full"
            />
          </div>
        </div>
        <div className="w-full bg-teal-600 text-gray-200 py-4">
          <h1 className="font-semibold text-xl pl-4">Charts</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg border-gray-400">
            <MonthlyPieCharts />
          </div>
          <div className="p-4 border rounded-lg border-gray-400">
            <MonthlySupportRequestsBarChart />
          </div>
        </div>
        <SimpleTable
          title="Tickets"
          columns={[
            {
              header: "Title",
              accessorFn: (cell) => cell.title,
            },
            {
              header: "Status",
              accessorFn: (cell) => cell.status,
            },
            {
              header: "Creator",
              accessorFn: (cell) => cell.creator?.fullName,
            },
            {
              header: "Created At",
              accessorFn: (cell) => cell.createdAt,
            },
            {
              header: "Actions",
              cell: (cell) => (
                <div className="flex gap-2">
                  <InspectButton
                    color="primary"
                    onClick={() => {
                      navigate(`/ticket-status/${cell.row.original.id}`);
                    }}
                  />
                  <DeleteButton className="" />
                </div>
              ),
            },
          ]}
          data={categoriesPageStatisticsData.tickets ?? []}
        />
      </div>
    </div>
  );
}
