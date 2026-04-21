import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all rounded-lg";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary hover:bg-gray-100",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={combinedClassName} type={type}>
      {children}
    </button>
  );
}
