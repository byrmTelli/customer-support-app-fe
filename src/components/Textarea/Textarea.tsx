import classNames from "classnames";
import { ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { Tooltip } from "../Tooltip";
import { TextareaProps } from "./types";

function Textarea(
  { className, label, invalid, disabled, ...textareaProps }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const isInvalid = typeof invalid !== "undefined";

  return (
    <div>
      {label && (
        <Tooltip title={label} placement="bottomLeft">
          <label
            className={classNames(
              "block mb-2 text-sm font-medium w-full truncate",
              {
                "text-gray-900 dark:text-gray-300": isInvalid === false,
                "text-red-700 dark:text-red-500": isInvalid,
              }
            )}
          >
            {label}
          </label>
        </Tooltip>
      )}
      <textarea
        ref={ref}
        disabled={disabled}
        {...textareaProps}
        className={twMerge(
          classNames(" sm:text-sm rounded-lg block w-full p-2.5", {
            "bg-gray-50 border border-gray-400 text-gray-900 focus:ring-cyan-600 focus:border-cyan-600":
              isInvalid === false,
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
              isInvalid,
            "bg-gray-100 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400":
              disabled,
          }),
          className
        )}
      />
      {typeof invalid === "string" && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{invalid}</p>
      )}
    </div>
  );
}

export default forwardRef(Textarea);
