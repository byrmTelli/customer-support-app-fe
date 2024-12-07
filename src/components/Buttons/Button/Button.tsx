import { Spinner } from "../../Spinner";
import { ButtonProps } from "./types";

export default function Button({
  className,
  title,
  type = "button",
  icon,
  varient,
  size,
  ...props
}: ButtonProps) {
  const varients = {
    light:
      "border-gray-600 text-gray-600 hover:bg-gray-700 hover:text-gray-200",
    dark: "bg-gray-700 text-gray-200 border-gray-700 hover:bg-gray-50 hover:text-gray-700",
    success:
      "bg-sky-800 text-gray-200 border-teal-700 hover:bg-gray-50 hover:text-sky-800",
    danger:
      "bg-rose-700 text-gray-200 border-rose-700 hover:bg-gray-50 hover:text-rose-700",
    info: "bg-sky-800 text-gray-200 border-sky-700 hover:bg-gray-50 hover:text-sky-700",
  };

  const sizes = {
    sm: "px-1 text-sm",
    md: "px-2 py-1 text-base",
    lg: "px-3 py-2 text-lg",
  };

  const currentVarient = varients[varient ? varient : "light"];
  const currentSize = sizes[size ? size : "md"];
  return (
    <button
      disabled={props.isLoading ? true : false}
      className={`px-3 py-1  select-none group border font-semibold lg:min-w-[6rem] flex items-center justify-center gap-2 transition-color duration-200 rounded-md ${className} ${currentVarient} ${currentSize}`}
      type={type}
      {...props}
    >
      {props.isLoading == true ? (
        <Spinner className="w-4" color={"success"} />
      ) : (
        <p className="text-xs flex gap-2 items-center py-1">
          <span className="group-hover:animate-shake">{icon}</span>
          {title}
        </p>
      )}
    </button>
  );
}
