import { useState } from "react";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import Button from "../../components/Buttons/Button/Button";
import SimpleTable from "../../components/SimpleTable/SimpleTable";
import { apiTicket } from "../../store/api/enhances/enhancedApiTicket";
import { ticketStatus } from "../../utils/utilsTicket";
import AssignTicketModal from "./AssignTicketModal/AssignTicketModal";
export default function TicketHistoryPage() {
  // States
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  // Queries
  const getTicketsQuery = apiTicket.useGetApiTicketGetTicketsQuery();
  // Data
  const tickets = getTicketsQuery.data?.data ?? [];
  // Hooks
  // Handlers
  return (
    <div className="">
      {isAssignModalOpen && (
        <AssignTicketModal
          isOpen={isAssignModalOpen}
          onClose={() => setIsAssignModalOpen(false)}
        />
      )}
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
                  cell: (cell) => (
                    <div className="p-2">
                      <Button
                        onClick={() => setIsAssignModalOpen(true)}
                        className=" p-2 text-sm rounded-lg font-semibold"
                        title="Assign"
                      />
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
