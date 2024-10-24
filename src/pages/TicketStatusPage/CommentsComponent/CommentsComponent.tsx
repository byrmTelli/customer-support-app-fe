import Comment from "./Comment/Comment";
import { CommentSectionComponentProps } from "./constants";

export default function CommentsComponent({
  comments,
}: CommentSectionComponentProps) {
  return (
    <div className="w-full mt-8">
      <h1 className="text-xl font-semibold">Comments</h1>
      <div className="flex flex-col gap-3 mt-4">
        {typeof comments === "undefined" ? (
          ""
        ) : comments.length == 0 ? (
          <p className="">There is no comment submitted yet.</p>
        ) : (
          comments?.map((item, key) => <Comment data={item} key={key} />)
        )}
      </div>
    </div>
  );
}
