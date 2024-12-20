import { IoTrashOutline } from "react-icons/io5";
import { DeleteButtonProps } from "./types";
import { Tooltip } from "../../Tooltip";

export default function DeleteButton({
  className,
  title,
  type = "button",
  icon,
  varient,
  size,
  ...props
}: DeleteButtonProps) {
  const varients = {
    light:
      "border-rose-600 text-rose-600 hover:bg-rose-700 hover:text-gray-200",
    dark: "bg-rose-700 text-white border-rose-700 hover:bg-gray-50 hover:text-rose-700",
  };

  const sizes = {
    sm: "px-1 text-sm",
    md: "px-2 py-1 text-base",
    lg: "px-3 py-2 text-lg",
  };

  const currentVarient = varients[varient ? varient : "light"];
  const currentSize = sizes[size ? size : "md"];
  return (
    <Tooltip title={"Delete"}>
      <button
        className={`px-3 py-2  select-none group border font-semibold lg:w-[6rem] flex items-center justify-center gap-2 transition-color duration-200 rounded-md ${className} ${currentVarient} ${currentSize}`}
        type={type}
        {...props}
      >
        <span className="group-hover:animate-shake">
          <IoTrashOutline />
        </span>
        {title}
      </button>
    </Tooltip>
  );
}
