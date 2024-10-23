import BreadCrum from "../../components/BreadCrum/BreadCrum";
import SimpleTable from "../../components/SimpleTable/SimpleTable";
import { apiTicket } from "../../store/api/enhances/enhancedApiTicket";
import { ticketStatus } from "../../utils/utilsTicket";

export default function TicketHistoryPage() {
  // States
  // Queries
  const getTicketsQuery = apiTicket.useGetApiTicketGetTicketsQuery();
  const tickets = getTicketsQuery.data?.data ?? [];
  // Hooks
  // Handlers
  return (
    <div className="">
      <BreadCrum />
      <div className="w-full h-full flex justify-center pt-4">
        <div className="w-full flex flex-col items-center p-2">
          <div className="w-full p-2">
            <p>
              Bu sayfa üzerinde geçmiş destek kayıtlarınıza ulaşabilirsiniz.
            </p>
          </div>
          <div className="min-h-96 border border-gray-400 p-4 w-full">
            <SimpleTable
              title=""
              columns={[
                {
                  header: "No",
                  accessorFn: (cell) => cell.id,
                },
                {
                  header: "Title",
                  accessorFn: (cell) => cell.title,
                },
                {
                  header: "Status",
                  cell: (cell) => (
                    <div className="p-2">
                      {ticketStatus(cell.row.original.status ?? 0)}
                    </div>
                  ),
                },
                {
                  header: "Category",
                  accessorFn: (cell) => cell.category?.name ?? "",
                },
                {
                  header: "Creator",
                  cell: (cell) => (
                    <div className="p-2">
                      {cell.row.original.creator?.fullName}
                    </div>
                  ),
                },
                {
                  header: "Actions",
                  cell: () => (
                    <div className="p-2">
                      <button className="bg-green-300 p-2 text-sm rounded-lg font-semibold">
                        Assign to me
                      </button>
                    </div>
                  ),
                },
              ]}
              data={tickets}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
