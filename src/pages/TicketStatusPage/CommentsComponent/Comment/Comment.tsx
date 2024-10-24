import { formatDateTime } from "../../../../utils/utilsDate";
import { CommentProps } from "./types";

export default function Comment({ data }: CommentProps) {
  // Utils
  const date = formatDateTime(data.createdAt ?? "");
  return (
    <div className="p-2 border border-gray-400 rounded-lg flex flex-col gap-2 py-4">
      <div className="flex items-center justify-between border-b border-b-gray-400 py-2">
        <div className="flex items-center gap-2 ">
          <img
            src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
            alt=""
            className="size-[40px] rounded-full"
          />
          <h1 className="font-semibold">{data.creator?.fullName}</h1>
        </div>
        <h1 className="text-sm font-semibold">{date}</h1>
      </div>
      <p className="">{data.message}</p>
    </div>
  );
}
