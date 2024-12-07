import { FaPhoneAlt, FaRegCalendarAlt, FaRegUserCircle } from "react-icons/fa";
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
import HelpdeskProfileTabs from "./HelpdeskProfileTabs/HelpdeskProfileTabs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import placeholder from "../../../assets/placeholder.jpg";

export default function HelpdeskProfile() {
  // States
  const navigate = useNavigate();
  const [isProfileUpdateModalOpen, setIsProfileUpdateModalOpen] =
    useState<boolean>(false);
  // Queries
  const getUsersProfile = apiUser.useGetApiAuthGetUserProfileQuery();
  const user = getUsersProfile.data?.data ?? {};

  const getTickets = apiTicket.useGetApiTicketGetTicketsOfHelpdeskQuery();

  // Memorize
  const tickets = getTickets.data?.data ?? [];

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
        <div className="col-span-4 xl:col-span-1 w-full h-full p-4 flex flex-col shadow">
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
              src={user.profileImage ?? placeholder}
              alt=""
            />
          </div>
          <div className="w-full grid grid-cols-2 bg-sky-800">
            <div className="flex items-center p-4 border-r border-gray-200">
              <p className="text-gray-200 font-semibold">User Informations</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-200 font-semibold p-4">
                Actions will be here...
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 border border-gray-400 text-sm">
            <div className="flex mt-3">
              <div className="flex items-center p-2">
                <FaRegUserCircle className="text-gray-700 text-xl" />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xl capitalize font-semibold">
                  {user.fullName}
                </p>
                <p className="">
                  <span className="font-semibold">@</span>
                  {user.username}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-2">
                <p className="font-semibold bg-sky-800 p-2 text-gray-200">
                  Email
                </p>
                <p className="px-2 py-4 flex items-center gap-2">
                  <MdEmail className="text-gray-700 text-xl" />
                  {user.email}
                </p>
              </div>
              <div className="">
                <p className="font-semibold bg-sky-800 text-gray-200 p-2">
                  Date
                </p>
                <p className="px-2 py-4 flex items-center gap-2">
                  <FaRegCalendarAlt className="text-gray-700 text-xl" />
                  {formatDateTime(user.createdAt ?? "")}
                </p>
              </div>
              <div className="">
                <p className="font-semibold bg-sky-800 text-gray-200 p-2">
                  Phone
                </p>
                <p className="px-2 py-4 flex items-center gap-4">
                  <FaPhoneAlt className="text-gray-700 text-xl" />{" "}
                  {user.phoneNumber}
                </p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold bg-sky-800 text-gray-200 p-2">
                  Adress
                </p>
                <p className="px-2 py-4 flex items-center gap-2">
                  <IoLocationSharp className="text-gray-700 text-xl" />
                  {user.adress}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 xl:col-span-3 grid w-full p-4 gap-2">
          <div className="w-full row-span-1 gap-2 flex flex-col shadow border border-gray-400">
            <HelpdeskProfileTabs userId={user.id ?? 0} />
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
