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
  "bg-gradient-to-r from-indigo-600 to-cyan-500",
  "px-8",
  "py-4",
  "font-semibold",
  "text-white",
  "shadow-[0_0_30px_rgba(79,70,229,0.6)]",
  "transition-all duration-300",
  "hover:scale-105",
  "hover:shadow-[0_0_50px_rgba(6,182,212,0.8)]",
  "active:scale-95",
  className
)}
      {...props}
    >
      {children}
    </button>
  );
}