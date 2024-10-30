import { useNavigate, useParams } from "react-router-dom";
import SimpleTable from "../../../../../components/SimpleTable/SimpleTable";
import { apiTicket } from "../../../../../store/api/enhances/enhancedApiTicket";
import { useAppSelector } from "../../../../../store/hooks";
import { formatDateTime } from "../../../../../utils/utilsDate";
import Button from "../../../../../components/Buttons/Button/Button";
import { BiDetail } from "react-icons/bi";

export default function UserTicketTable() {
  // States
  const navigate = useNavigate();
  const params = useParams();
  const user = useAppSelector((state) => state.user);
  const getTickets = apiTicket.useGetApiTicketGetTicketsOfUserQuery({
    id: Number(params.id),
  });

  // Memorize
  const tickets = getTickets.data?.data ?? [];
  // Handlers

  var tableData = tickets.map((item) => ({
    ...item,
    createdAt: formatDateTime(item.createdAt ?? ""),
  }));
  return (
    <div className="w-full">
      <SimpleTable
        title="User's Tickets"
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
            header: "Date",
            accessorFn: (cell) => cell.createdAt,
          },
          {
            header: "Status",
            accessorFn: (cell) => cell.status,
          },
          {
            header: "Actions",
            cell: (cell) => (
              <div>
                <Button
                  onClick={() =>
                    navigate(`/ticket-status/${cell.row.original.id}`)
                  }
                  size="sm"
                  title="Detail"
                  icon={<BiDetail />}
                />
              </div>
            ),
          },
        ]}
        data={tableData}
      />
    </div>
  );
}
