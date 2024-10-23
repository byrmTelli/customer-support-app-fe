import { useState } from "react";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import Comment from "./Comment/Comment";
import { IoSendSharp } from "react-icons/io5";
import { AiFillFilePdf, AiFillFile } from "react-icons/ai";
import { apiTicket } from "../../store/api/enhances/enhancedApiTicket";
import { useParams } from "react-router-dom";
import { ticketStatus } from "../../utils/utilsTicket";
import { formatDateTime } from "../../utils/utilsDate";

export default function TicketStatusPage() {
  // States
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const params = useParams();
  const ticketId = Number(params.id);

  // Image file types
  const imageTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  // File upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Queries
  const getTicketByIdQuery = apiTicket.useGetApiTicketGetTicketByIdQuery({
    id: ticketId,
  });

  const ticketData = getTicketByIdQuery.data?.data ?? {};
  // Hooks
  // Handlers

  // Utils
  const status = ticketStatus(ticketData.status ?? 0);
  const date = formatDateTime(ticketData.createdAt ?? "");

  return (
    <div>
      <BreadCrum />
      <div className="grid grid-cols-6 w-full gap-2 items-center justify-center p-4 mt-4">
        <div className="col-span-4 col-start-2 flex flex-col items-center gap-4 border border-gray-400 rounded-lg p-8">
          <div className="flex w-full gap-2 font-bold text-xl">
            <h1>Subject:</h1>
            <h1>{ticketData.title}</h1>
          </div>
          {/* Properties */}
          <div className="flex items-center justify-between w-full text-sm font-semibold">
            <div className="flex gap-2 items-center">
              <h1>Creator: </h1>
              <div className="flex items-center justify-center gap-2">
                <img
                  src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
                  alt=""
                  className="size-[30px] rounded-full"
                />
                <p>{ticketData.creator?.fullName}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <h1>Status: </h1>
              <p className="text-teal-700">{status}</p>
            </div>
            <div className="flex gap-2">
              <h1>Date: </h1>
              <p>{date}</p>
            </div>
          </div>
          {/* Content */}
          <div className="col-span-3 w-full col-start-2 flex flex-col text-justify">
            <h1 className="font-semibold">Description:</h1>
            <p className="">{ticketData.content}</p>
          </div>
          <div className="w-full">
            <h1 className="font-semibold">Files:</h1>
            <div className="">{/* files will be here */}</div>
          </div>
          <div className="w-full mt-8">
            <h1 className="text-xl font-semibold">Comments</h1>
            <div className="flex flex-col gap-3 mt-4">
              {ticketData.comments?.map((item, key) => (
                <Comment data={item} key={key} />
              ))}
            </div>
          </div>

          {/* Yüklenen Dosyaları Gösterme */}
          <div className="w-full mt-4">
            <h1 className="text-gray-600 font-semibold">Uploaded Files</h1>
            <div className="grid grid-cols-8 gap-4 mt-4">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  {/* Dosyanın türüne göre gösterim */}
                  {imageTypes.includes(file.type) ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="size-14 object-cover"
                    />
                  ) : file.type === "application/pdf" ? (
                    <AiFillFilePdf size={40} className="text-red-600" />
                  ) : (
                    <AiFillFile size={40} className="text-gray-500" />
                  )}
                  <p className="text-xs text-gray-700">{file.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dosya Yükleme ve Yorum Yazma */}
          <div className="w-full flex flex-col gap-2 p-2">
            <h1 className="text-gray-600 font-semibold">Comment</h1>
            <textarea className="w-full min-h-24 outline-none p-2  border border-gray-400 rounded-lg" />
            <div className="w-full flex items-center justify-between">
              {/* Dosya Yükleme Input'u */}
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              <button className="border border-gray-400 rounded-lg p-2 w-[6rem] flex items-center justify-center text-gray-600">
                <IoSendSharp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
