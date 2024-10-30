import { apiUser } from "../../../../../store/api/enhances/enhancedApiUser";
import { toast } from "react-toastify";
import { formatDateTime } from "../../../../../utils/utilsDate";
import { UserProfileSideMenuProps } from "./types";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaBan } from "react-icons/fa6";

export default function UserProfileSideMenu({
  user,
}: UserProfileSideMenuProps) {
  // States
  // Queries
  const [approveUser, approveUserMutation] =
    apiUser.usePostApiUserApproveUserMutation();
  // Handlers
  var handleApproveUserButtonClick = (id: number) => {
    approveUser({ id: id })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="w-full">
      <div className="w-full grid items-center text-center bg-teal-700 p-2 h-[3rem]">
        <h1 className="text-sm text-gray-200">
          <span className="font-semibold uppercase">Role: </span>
          {user.role?.name}
        </h1>
      </div>
      <div className="w-full flex items-center justify-center relative border border-gray-400 ">
        <img
          className="p-4 rounded-full object-cover size-[200px]"
          src={user.profileImage ?? ""}
          alt=""
        />
      </div>
      <div className="w-full grid bg-teal-700">
        <div className="p-3 flex flex-col items-center justify-center cursor-pointer text-gray-200 hover:bg-teal-600">
          {user.isApproved && user.isApproved == true ? (
            <button className="flex flex-col items-center gap-1">
              <FaBan />
              <p className="text-xs">Ban User</p>
            </button>
          ) : (
            <button
              onClick={() => handleApproveUserButtonClick(user.id ?? 0)}
              className="flex flex-col items-center gap-1"
            >
              <HiOutlineBadgeCheck />
              <p className="text-xs">Approve</p>
            </button>
          )}
        </div>
      </div>
      <div className="w-full p-4 flex flex-col gap-4 border border-gray-400 text-sm">
        <div className="flex items-end gap-2">
          <p className="text-xl font-semibold">{user.fullName}</p>
          <p>
            <span className="font-semibold">@</span>
            {user.username}{" "}
            {user.isApproved == false ? (
              <span className="italic text-xs text-orange-700">
                Waiting for approval
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2">
            <p className="font-semibold bg-slate-300 p-2">Email</p>
            <p className="p-2">{user.email}</p>
          </div>
          <div className="">
            <p className="font-semibold bg-slate-300 p-2">Date</p>
            <p className="p-2">{formatDateTime(user.createdAt ?? "")}</p>
          </div>
          <div className="">
            <p className="font-semibold bg-slate-300 p-2">Phone</p>
            <p className="p-2">{user.phoneNumber}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold bg-slate-300 p-2">Adress</p>
            <p className="p-2">{user.adress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
