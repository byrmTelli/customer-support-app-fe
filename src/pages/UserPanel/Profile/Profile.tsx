import { FaBell } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiTicket } from "../../../store/api/enhances/enhancedApiTicket";
import Button from "../../../components/Buttons/Button/Button";
import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import { formatDateTime } from "../../../utils/utilsDate";

export default function Profile() {
  // States
  // Queries
  const getTickets = apiTicket.useGetApiTicketGetTicketsOfUserQuery({ id: 8 });
  const tickets = getTickets.data?.data ?? [];
  // Handlers

  var tableData = tickets.map((item) => ({
    ...item,
    createdAt: formatDateTime(item.createdAt ?? ""),
  }));

  return (
    <div className="w-full p-4">
      <BreadCrum />
      <div className="grid grid-cols-4 p-4 border border-gray-400 gap-2">
        <div className="col-span-1 w-full shadow m-4">
          <div className="w-full flex items-center justify-center relative">
            <img
              className="p-4 rounded-full object-cover size-[200px]"
              src="https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37951.jpg?t=st=1729805874~exp=1729809474~hmac=d108c82866eb9c935767008e397c7474fa0323f5b25bb671ace888721d6f7401&w=826"
              alt=""
            />
          </div>
          <div className="w-full flex items-center justify-center p-2 border-b border-gray-400">
            <div className="p-1 flex flex-col items-center justify-center cursor-pointer">
              <FaBell />
              <p className="text-xs">Informations</p>
            </div>
            <div className="p-1 flex flex-col items-center justify-center cursor-pointer">
              <FaHandshakeAngle />
              <p className="text-xs">Tickets (2)</p>
            </div>
          </div>
          <div className="w-full p-4 flex flex-col gap-4">
            <div className="">
              <p className="text-xl font-semibold">Bayram Telli</p>
              <p>
                <span className="font-semibold">@</span>bayramtelli
              </p>
            </div>
            <div className="">
              <p className="font-semibold">Email</p>
              <p>bayramtelli@test.com</p>
            </div>
            <div className="">
              <p className="font-semibold">Date</p>
              <p>12/10/2021</p>
            </div>
            <div className="">
              <p className="font-semibold">Adress</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                expedita ducimus enim.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-rows-3 w-full p-4 gap-2">
          <div className="w-full p-4 row-span-1 gap-2 flex flex-col shadow">
            <div className="w-full">
              <h1 className="font-semibold">System Messages</h1>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                ratione.
              </p>
            </div>
          </div>
          <div className="w-full p-4 row-span-2 shadow">
            <div className="w-full">
              <SimpleTable
                title="Tickets"
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
                        <Button size="sm" title="Inpenct" />
                      </div>
                    ),
                  },
                ]}
                data={tableData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
