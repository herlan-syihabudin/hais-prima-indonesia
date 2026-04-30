import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    // Primary Industrial - Biru
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-industrial hover:shadow-industrial-lg",
    // Secondary Industrial - Slate
    secondary:
      "bg-secondary-500 text-white hover:bg-gray-700 focus:ring-secondary-500 shadow-industrial",
    // Outline dengan primary
    outline:
      "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500",
    // Outline putih (untuk hero)
    "outline-white":
      "border-2 border-white text-white hover:bg-white hover:text-primary-600 focus:ring-white",
    // Ghost button
    ghost:
      "text-gray-600 hover:text-primary-500 hover:bg-primary-50 focus:ring-primary-500",
  };

  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
    xl: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
