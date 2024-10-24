import classNames from "classnames";
import { ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { Spinner } from "../Spinner";
import { Tooltip } from "../Tooltip";
import { InputProps } from "./types";

function Input(
  {
    className,
    label,
    invalid,
    disabled: inputDisabled,
    loading,
    inputClassName,
    ...inputProps
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  // Memorize
  const isInvalid = Boolean(invalid);
  const disabled = loading || inputDisabled;

  return (
    <div className={twMerge("flex flex-col items-center", className)}>
      {label && (
        <Tooltip title={label} placement="bottomLeft">
          <label
            className={classNames(
              "self-start block mb-2 text-sm font-medium w-full truncate",
              {
                "text-gray-900": isInvalid === false,
                "text-red-700 dark:text-red-500": isInvalid,
              }
            )}
          >
            {label}
          </label>
        </Tooltip>
      )}
      <input
        ref={ref}
        {...inputProps}
        disabled={disabled}
        className={twMerge(
          classNames(
            "h-10 sm:text-sm rounded-lg block w-full p-2.5 outline-none",
            {
              "bg-gray-50 border border-gray-400 text-gray-900 focus:ring-cyan-600 focus:border-cyan-600":
                isInvalid === false,
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
                isInvalid,
              "bg-gray-100 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400":
                disabled,
            }
          ),
          inputClassName
        )}
      />
      {typeof invalid === "string" && (
        <p className="self-start mt-2 text-sm text-red-600 dark:text-red-500">
          {invalid}
        </p>
      )}
      {loading && (
        <Spinner
          color="default"
          className="w-5 absolute cursor-not-allowed ml-[-0.6rem] mt-[-2rem]"
        />
      )}
    </div>
  );
}

export default forwardRef(Input);
