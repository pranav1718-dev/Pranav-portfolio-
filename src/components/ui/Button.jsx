import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/cn";

const VARIANTS = {
  primary:
    "bg-ink text-paper hover:bg-accent focus-visible:bg-accent",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "bg-transparent text-void-text border border-void-line hover:border-lime hover:text-lime",
};

/**
 * Shared button/link primitive. Renders an <a> when `href` is given,
 * otherwise a <button>. Keeps focus and hover treatment consistent
 * across the site.
 */
export function Button({
  href,
  onClick,
  variant = "primary",
  icon = true,
  className,
  children,
  ...rest
}) {
  const classes = cn(
    "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300",
    VARIANTS[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
