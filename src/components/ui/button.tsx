import Link from "next/link";

/* =============================================================================
 * Button — Primary / Secondary / Ghost variants
 * 
 * Usage:
 *   <Button href="/products">View Products</Button>
 *   <Button variant="secondary" href="/contact">Contact</Button>
 *   <Button variant="ghost" onClick={handler}>Click</Button>
 * ============================================================================= */

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container transition-colors",
  secondary:
    "border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all",
  ghost:
    "text-primary hover:bg-surface-container-high transition-colors",
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 font-label text-xs font-semibold uppercase tracking-[0.08em] cursor-pointer " +
    variantStyles[variant] +
    " " +
    className;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick}>
      {children}
    </button>
  );
}
