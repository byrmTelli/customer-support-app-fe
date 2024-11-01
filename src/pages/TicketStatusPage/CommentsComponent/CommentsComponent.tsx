import Comment from "./Comment/Comment";
import { CommentSectionComponentProps } from "./constants";

export default function CommentsComponent({
  comments,
}: CommentSectionComponentProps) {
  return (
    <div className="w-full flex flex-col border border-gray-400 px-4 py-2 min-h-32">
      <h1 className="font-semibold">Comments: </h1>
      <div className="flex flex-col gap-3 mt-4">
        {typeof comments === "undefined" ? (
          ""
        ) : comments.length == 0 ? (
          <p className="text-sm font-semibold italic text-gray-600">
            There is no comment submitted yet.
          </p>
        ) : (
          comments?.map((item, key) => <Comment data={item} key={key} />)
        )}
      </div>
    </div>
  );
}
