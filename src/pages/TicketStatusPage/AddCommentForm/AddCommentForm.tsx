import { AiFillFile, AiFillFilePdf } from "react-icons/ai";

export default function AddCommentForm() {
  return (
    <div className="w-full">
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
        {ticketData.status === TicketStatusTypes.Waiting && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
