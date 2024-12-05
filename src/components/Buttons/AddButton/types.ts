import { ButtonHTMLAttributes } from "react";

export interface AddButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: JSX.Element;
  varient?: "light" | "dark";
  tooltipMessage?: string;
  isLoading?: boolean;
}
