import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "mint" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-stone-900 text-white hover:bg-stone-700 shadow-sm",
  mint:
    "bg-mint-500 text-white hover:bg-mint-600 shadow-sm shadow-mint-200",
  secondary:
    "bg-white text-stone-800 border border-stone-200 hover:border-stone-300 hover:bg-stone-50 shadow-sm",
  ghost:
    "text-stone-600 hover:text-stone-900 hover:bg-stone-100",
  dark:
    "bg-white/10 text-white border border-white/20 hover:bg-white/20",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[15px]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-400 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed";

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
