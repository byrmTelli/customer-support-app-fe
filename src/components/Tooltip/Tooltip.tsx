import { default as TooltipComponent } from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

import { TooltipProps } from "./types";

export default function Tooltip({
  title,
  placement = "bottom",
  overlayInnerStyle,
  children,
}: TooltipProps) {
  return (
    <TooltipComponent
      overlay={
        <div className="text-white dark:text-black bg-gray-50 border border-gray-400 w-full h-full py-2 px-4 rounded-lg">
          {title}
        </div>
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      showArrow={false}
      placement={placement}
      destroyTooltipOnHide
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      overlayInnerStyle={{
        padding: 0,
        display: "flex",
        minHeight: "auto",
        backgroundColor: "",
        ...overlayInnerStyle,
      }}
    >
      {children}
    </TooltipComponent>
  );
}
