/* =============================================================================
 * Badge — Status / Compliance / Category indicator
 * 
 * Usage:
 *   <Badge>ISO 9001</Badge>
 *   <Badge variant="success">Compliant</Badge>
 *   <Badge variant="info">PDF</Badge>
 * ============================================================================= */

type BadgeVariant = "default" | "success" | "warning" | "info";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface-container-high text-on-surface",
  success: "bg-green-100 text-green-800",
  warning: "bg-amber-100 text-amber-800",
  info: "bg-primary-fixed text-primary",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={
        "inline-flex items-center px-2 py-0.5 font-label text-[11px] font-semibold uppercase tracking-[0.08em] " +
        variantStyles[variant] +
        " " +
        className
      }
    >
      {children}
    </span>
  );
}
