/**
 * Tiny classnames combiner — joins truthy class strings and trims whitespace.
 * Avoids pulling in clsx/tailwind-merge for a simple concatenation need.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
