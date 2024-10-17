import { useState } from "react";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import Comment from "./Comment/Comment";
import { IoSendSharp } from "react-icons/io5";
import { AiFillFilePdf, AiFillFile } from "react-icons/ai";

export default function TicketStatusPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Desteklenen resim türleri
  const imageTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  // Dosya yükleme işlemi
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    <div>
      <BreadCrum />
      <div className="grid grid-cols-5 w-full gap-2 items-center justify-center p-4">
        <div className="col-span-3 col-start-2 flex flex-col items-center gap-4 p-2">
          <div className="flex w-full gap-2 font-bold text-xl">
            <h1>Subject:</h1>
            <h1>Request Title</h1>
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
                <p>Bayram Telli</p>
              </div>
            </div>

            <div className="flex gap-2">
              <h1>Status: </h1>
              <p>Waiting</p>
            </div>
            <div className="flex gap-2">
              <h1>Created At: </h1>
              <p>10-02-2025</p>
            </div>
          </div>
          {/* Content */}
          <div className="col-span-3 col-start-2 flex text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod
              quasi architecto explicabo laboriosam nihil officiis quia ullam
              aliquam asperiores praesentium qui minus earum neque assumenda
              voluptatibus, perspiciatis autem dicta adipisci voluptas cumque
              dolorum doloribus quidem libero. Quis dolores nam enim
              consequuntur harum ut soluta facilis, aperiam excepturi, vel
              similique!
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold">Comments</h1>
            <div className="flex flex-col gap-3 mt-4">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
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
