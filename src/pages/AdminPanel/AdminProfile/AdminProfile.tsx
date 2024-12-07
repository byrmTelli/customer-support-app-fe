import { FaBell } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiTicket } from "../../../store/api/enhances/enhancedApiTicket";
import Button from "../../../components/Buttons/Button/Button";
import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import { formatDateTime } from "../../../utils/utilsDate";
import { BiDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { apiUser } from "../../../store/api/enhances/enhancedApiUser";
import UpdateModalButton from "../../../components/Buttons/UpdateModalButton/UpdateModalButton";
import { FaPenToSquare } from "react-icons/fa6";
import { useState } from "react";
import ProfileUpdateModal from "./ProfileUpdateModal/ProfileUpdateModal";
import AdminProfileTabs from "./AdminProfileTabs/AdminProfileTabs";

export default function AdminProfile() {
  // States
  const navigate = useNavigate();
  const [isProfileUpdateModalOpen, setIsProfileUpdateModalOpen] =
    useState<boolean>(false);
  // Queries
  const getUsersProfile = apiUser.useGetApiAuthGetUserProfileQuery();
  const user = getUsersProfile.data?.data ?? {};

  const getTickets = apiTicket.useGetApiTicketGetTicketsOfUserQuery({
    id: user.id,
  });

  // Memorize
  const tickets = getTickets.data?.data ?? [];
  console.log(user);
  // Handlers

  const tableData = tickets.map((item) => ({
    ...item,
    createdAt: formatDateTime(item.createdAt ?? ""),
  }));

  return (
    <div className="w-full p-4">
      {isProfileUpdateModalOpen && (
        <ProfileUpdateModal
          isOpen={isProfileUpdateModalOpen}
          onClose={() => setIsProfileUpdateModalOpen(false)}
        />
      )}
      <BreadCrum />
      <div className="grid grid-cols-4 p-4 border border-gray-400 gap-2">
        <div className="col-span-4 xl:col-span-1 w-full shadow p-4">
          <div className="w-full grid place-items-end bg-sky-800 p-2">
            <UpdateModalButton
              icon={<FaPenToSquare />}
              varient="dark"
              size="sm"
              className=""
              onClick={() => setIsProfileUpdateModalOpen(true)}
            />
          </div>
          <div className="w-full flex items-center justify-center relative border border-gray-400 ">
            <img
              className="p-4 rounded-full object-cover size-[200px]"
              src={user.profileImage ?? ""}
              alt=""
            />
          </div>
          <div className="w-full grid grid-cols-5 bg-sky-800">
            <div className="p-3 flex flex-col items-center justify-center cursor-pointer text-gray-200 hover:bg-teal-600">
              <FaBell />
              <p className="text-xs">Informations</p>
            </div>
            <div className="p-3 flex flex-col items-center justify-center cursor-pointer text-gray-200 hover:bg-teal-600">
              <FaHandshakeAngle />
              <p className="text-xs">Tickets (2)</p>
            </div>
          </div>
          <div className="w-full p-4 flex flex-col gap-4 border border-gray-400 text-sm">
            <div className="flex items-end gap-2">
              <p className="text-xl font-semibold">{user.fullName}</p>
              <p>
                <span className="font-semibold">@</span>
                {user.username}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs 2xl:text-base">
              <div className="col-span-2">
                <p className="font-semibold bg-gray-200 p-2">Email</p>
                <p className="p-2">{user.email}</p>
              </div>
              <div className="">
                <p className="font-semibold bg-gray-200 p-2">Date</p>
                <p className="p-2 text-xs 2xl:text-base">
                  {formatDateTime(user.createdAt ?? "")}
                </p>
              </div>
              <div className="">
                <p className="font-semibold bg-gray-200 p-2">Phone</p>
                <p className="p-2">{user.phoneNumber}</p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold bg-gray-200 p-2">Adress</p>
                <p className="p-2 text-xs 2xl:text-base">{user.adress}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 xl:col-span-3 grid w-full p-4 gap-2">
          <div className="w-full row-span-3 flex flex-col shadow border border-gray-400">
            <AdminProfileTabs userId={user.id ?? 0} />
          </div>
          <div className="w-full border border-gray-400 row-span-3 shadow">
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
          </div>
        </div>
      </div>
    </div>
  );
}
