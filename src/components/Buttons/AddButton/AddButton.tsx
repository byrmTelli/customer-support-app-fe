import { BsEnvelopeArrowUp } from "react-icons/bs";
import { AddButtonProps } from "./types";
import { Tooltip } from "../../Tooltip";
import { IoIosAdd } from "react-icons/io";

export default function AddButton({
  className,
  title,
  type = "button",
  icon,
  varient,
  size,
  tooltipMessage,
  ...props
}: AddButtonProps) {
  const varients = {
    light: "border-teal-600 text-sky-600 hover:bg-sky-800 hover:text-gray-200",
    dark: "bg-sky-800 text-gray-200 border-teal-700 hover:bg-gray-50 hover:text-sky-800",
  };

  const sizes = {
    sm: "px-1 text-sm",
    md: "px-2 py-1 text-base",
    lg: "px-3 py-2 text-lg",
  };

  const currentVarient = varients[varient ? varient : "light"];
  const currentSize = sizes[size ? size : "md"];
  return (
    <>
      {tooltipMessage ? (
        <Tooltip title={tooltipMessage}>
          <button
            className={`px-3 py-2  select-none group border font-semibold flex items-center justify-center gap-2 transition-color duration-200 rounded-md ${className} ${currentVarient} ${currentSize}`}
            type={type}
            {...props}
          >
            {icon ? (
              <span className="group-hover:animate-shake text-xl">{icon}</span>
            ) : (
              <span className="group-hover:animate-shake text-xl">
                <IoIosAdd />
              </span>
            )}

            <span className="text-sm">{title}</span>
          </button>
        </Tooltip>
      ) : (
        <button
          className={`px-3 py-2  select-none group border font-semibold flex items-center justify-center gap-2 transition-color duration-200 rounded-md ${className} ${currentVarient} ${currentSize}`}
          type={type}
          {...props}
        >
          {icon ? (
            <span className="group-hover:animate-shake text-xl">{icon}</span>
          ) : (
            <span className="group-hover:animate-shake text-xl">
              <IoIosAdd />
            </span>
          )}
          <span className="text-sm">{title}</span>
        </button>
      )}
    </>
  );
}
