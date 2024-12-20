import { ButtonHTMLAttributes } from "react";

export interface UpdateModalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: JSX.Element;
  varient?: "light" | "dark" | "success";
  isLoading?: boolean;
}
