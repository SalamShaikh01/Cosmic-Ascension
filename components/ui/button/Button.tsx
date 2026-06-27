import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl",
        "px-6",
        "py-3",
        "font-semibold",
        "transition-all",
        "duration-300",
        "bg-indigo-600",
        "hover:bg-indigo-500",
        "active:scale-95",
        "shadow-lg",
        "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}