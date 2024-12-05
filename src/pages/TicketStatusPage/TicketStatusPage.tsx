import { useState } from "react";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import { AiFillFilePdf } from "react-icons/ai";
import { apiTicket } from "../../store/api/enhances/enhancedApiTicket";
import { useParams } from "react-router-dom";
import { formatDateTime } from "../../utils/utilsDate";
import CommentsComponent from "./CommentsComponent/CommentsComponent";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import UnauthorizedPage from "../UnauthorizedPage/UnauthorizedPage";
import TicketFileModal from "./TicketFileModal/TicketFileModal";
import { TicketAttacmentViewModel } from "../../store/api/generated/generatedApiTicket";
import AddCommentForm from "./AddCommentForm/AddCommentForm";
import Button from "../../components/Buttons/Button/Button";
import { toast } from "react-toastify";
import { useAppSelector } from "../../store/hooks";

export default function TicketStatusPage() {
  // States
  const [isTicketFileModalOpen, setIsTicketFileModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] =
    useState<TicketAttacmentViewModel | null>(null);
  const params = useParams();
  const ticketId = Number(params.id);
  const currentUser = useAppSelector(state => state.user);
  // Queries
  const { data: getTicketByIdQuery, error } =
    apiTicket.useGetApiTicketGetTicketByIdQuery({
      ticketId: ticketId,
    });

    const [updateTicketStatus] = apiTicket.usePostApiTicketUpdateTicketStatusMutation();

  if (error) {
    const errorStatus = error as FetchBaseQueryError;
    if (errorStatus.status == 400) {
      return <UnauthorizedPage />;
    }
  }

  const ticketData = getTicketByIdQuery?.data ?? {};
  // Hooks
  // Handlers
  const handleTicketFileClick = (file: TicketAttacmentViewModel) => {
    setSelectedFile(file);
    setIsTicketFileModalOpen(true);
  };
  const handleTicketStatusUpdateButtonClick = (ticketStatus:string) => {
    updateTicketStatus({
      status : ticketStatus,
      ticketId : ticketData.id
    }).unwrap()
    .then((res) => {if(res.code == 200){
      toast.success(`ticket status successfully updated as ${ticketStatus}`);
    }}
  )
    .catch((err) => {
      toast.error(err.message);
    })
    .finally()
  }

  // Utils
  const date = formatDateTime(ticketData.createdAt ?? "");

  return (
    <div>
      {isTicketFileModalOpen && (
        <TicketFileModal
          file={selectedFile}
          isOpen={isTicketFileModalOpen}
          onClose={() => setIsTicketFileModalOpen(false)}
        />
      )}
      <BreadCrum />
      <div className="grid grid-cols-6 w-full gap-2 items-center justify-center p-4 mt-4 text-sm">
        <div className="col-span-4 col-start-2 flex flex-col items-center gap-4 border border-gray-400 p-8">
          <div className="flex w-full gap-2 justify-between">
            <div className="flex gap-2 items-center text-xl font-semibold">
            <h1 className="text-gray-700">Title:</h1>
            <h1 className="text-gray-700 italic">"{ticketData.title}"</h1>
            </div>
            {
              currentUser.role?.name != 'Customer' ?
              <div className ="flex items-center gap-2">
                {
                (ticketData.status == "Pending" && currentUser.role?.name == "Admin") ?
                <Button 
                onClick={() => handleTicketStatusUpdateButtonClick("Waiting")}
                title={"Active"} varient="info" />
                  :""
              }
              {
                ticketData.status == "Waiting" && currentUser.role?.name == "Customer Support" ?
                <Button 
                onClick={() => handleTicketStatusUpdateButtonClick("Pending")}
                title={"Send Admin"} varient="dark" />
                  :""
              }
                {
                (ticketData.status == "Waiting") || (ticketData.status == "Pending" && currentUser.role?.name == "Admin") ?
                <Button 
                onClick={() => handleTicketStatusUpdateButtonClick("Cancelled")}
                title={"Cancel"} varient="danger" />
                  :""
              }
              {
                (ticketData.status == "Waiting") ?
                <Button 
                onClick={() => handleTicketStatusUpdateButtonClick("Completed")}
                title={"Complete"} varient="info" />
                  :""
              }
              </div>              
              :
                ""
            }
          </div>
          {/* Properties */}
          <div className="w-full grid md:grid-cols-3 gap-2">
            <div className="flex flex-col gap-2  border border-gray-400 px-4 py-2">
              <h1 className="font-semibold">Creator: </h1>
              {ticketData.creator && (
                <div className="flex items-center gap-2">
                  <img
                    src={ticketData.creator.profileImage ?? ""}
                    alt=""
                    className="size-[30px] rounded-full"
                  />
                  <p className="">{ticketData.creator?.fullName}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 border border-gray-400 px-4 py-2">
              <h1 className="font-semibold">Status: </h1>
              <p className="text-teal-700">{ticketData.status}</p>
            </div>
            <div className="flex flex-col gap-2 border border-gray-400 px-4 py-2">
              <h1 className="font-semibold">Date: </h1>
              <p>{date}</p>
            </div>
          </div>
          {/* Content */}
          <div className="col-span-3 w-full col-start-2 flex flex-col gap-2 border border-gray-400 py-2 px-4 min-h-48">
            <h1 className="font-semibold">Description:</h1>
            <p className="">{ticketData.content}</p>
          </div>
          <div className="w-full flex flex-col gap-2 border border-gray-400 py-2 px-4">
            <h1 className="font-semibold">Files:</h1>
            <div className="py-4 flex items-end gap-4">
              {ticketData.files && ticketData.files.length > 0 ? (
                ticketData.files?.map((file, key) => (
                  <div
                    onClick={() => handleTicketFileClick(file)}
                    key={key}
                    className="p-2 flex flex-col items-center gap-2"
                  >
                    {" "}
                    {file.fileType === "application/pdf" ? (
                      <AiFillFilePdf className="text-red-600 text-6xl" />
                    ) : (
                      <img
                        src={file.file ?? ""}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <p className="text-xs text-gray-600 italic">
                      {file.fileName?.slice(0, 5)}
                      {"---"}
                      {file.fileName?.slice(-4)}
                    </p>
                  </div>
                ))
              ) : (
                <h1 className="font-semibold italic text-sm text-gray-600">
                  No file attached this ticket.
                </h1>
              )}
            </div>
          </div>
          <CommentsComponent comments={ticketData.comments ?? []} />
          <AddCommentForm ticket={ticketData} />
        </div>
      </div>
    </div>
  );
}
