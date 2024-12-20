import { toast } from "react-toastify";
import { apiComment } from "../../../../store/api/enhances/enhancedApiComment";
import { useAppSelector } from "../../../../store/hooks";
import { formatDateTime } from "../../../../utils/utilsDate";
import { CommentProps } from "./types";
import { FaTrashCan } from "react-icons/fa6";
export default function Comment({ data }: CommentProps) {
  // States
  const currentUser = useAppSelector((state) => state.user);
  // Queries
  const [removeComment] =
    apiComment.useDeleteApiCommentDeleteCommentMutation();
  // Utils
  const date = formatDateTime(data.createdAt ?? "");

  // Handlers
  const handleRemoveComment = (commentId: number) => {
    removeComment({ id: commentId })
      .unwrap()
      .then((res) => {
        if (res.code == 200) {
          toast.success("Comment removed successfully.");
        }
      })
      .catch()
      .finally();
  };
  return (
    <div className="px-4 shadow flex flex-col gap-2 py-2">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <img
            src={data.creator?.profileImage ?? ""}
            alt=""
            className="size-[20px] rounded-full"
          />
          <h1 className="font-semibold text-sm">{data.creator?.fullName}</h1>
          <h1 className="text-xs text-gray-600 italic font-semibold">{date}</h1>
        </div>
        {currentUser.id == data.creator?.id ?
                <div
                onClick={() => handleRemoveComment(data.id ?? 0)}
                className="text-gray-600 text-xs hover:bg-gray-300 p-2 rounded-full"
              >
                <FaTrashCan /> 
              </div>
        : ""}
      </div>
      <p className="">{data.message}</p>
    </div>
  );
}
