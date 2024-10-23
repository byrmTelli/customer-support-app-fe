import { useState } from "react";
import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import Button from "../../../components/Buttons/Button/Button";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiTicket } from "../../../store/api/enhances/enhancedApiTicket";
import { ticketStatus } from "../../../utils/utilsTicket";
import AssignTicketModal from "./AssignTicketModal/AssignTicketModal";
import { AdminPanelTicketsTableViewModel } from "../../../store/api/generated/generatedApiTicket";
export default function TicketListPage() {
  // States
  const [selectedData, setSelectedData] =
    useState<AdminPanelTicketsTableViewModel | null>(null);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  // Queries
  const getTicketsQuery = apiTicket.useGetApiTicketGetAllTicketForAdminQuery();
  // Data
  const tickets = getTicketsQuery.data?.data ?? [];
  // Hooks
  // Handlers
  return (
    <div className="">
      {isAssignModalOpen && (
        <AssignTicketModal
          selectedData={selectedData}
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
              title="Ticket History"
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
                  accessorFn: (cell) => cell.status,
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
                  header: "Assigned to",
                  cell: (cell) =>
                    cell.row.original.assignedTo != null ? (
                      <div className="p-2">
                        {cell.row.original.assignedTo?.fullName}
                      </div>
                    ) : (
                      <div className="p-2">
                        <span className="py-1 px-1 lg:px-3 rounded-lg bg-orange-400 font-semibold text-gray-200 text-xs">
                          Not Assigned
                        </span>
                      </div>
                    ),
                },
                {
                  header: "Actions",
                  cell: (cell) => (
                    <div className="p-2">
                      {cell.row.original.assignedTo == null ? (
                        <Button
                          onClick={() => {
                            setIsAssignModalOpen(true);
                            setSelectedData(cell.row.original);
                          }}
                          className=" p-2 text-sm rounded-lg font-semibold"
                          title="Assign"
                        />
                      ) : (
                        ""
                      )}
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
