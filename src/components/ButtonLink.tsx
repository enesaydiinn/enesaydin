import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  icon?: ReactNode;
  target?: string;
};

const variants = {
  primary:
    "bg-brand-blue text-white shadow-sm hover:bg-blue-700 focus-visible:outline-brand-blue",
  secondary:
    "border border-brand-line bg-white text-brand-ink hover:border-brand-blue hover:text-brand-blue focus-visible:outline-brand-blue",
  dark: "bg-brand-navy text-white hover:bg-slate-800 focus-visible:outline-brand-navy",
  ghost: "text-brand-ink hover:bg-slate-100 focus-visible:outline-brand-blue"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon,
  target
}: ButtonLinkProps) {
  const content = (
    <>
      {icon}
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </>
  );
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    className
  );

  if (href.startsWith("http") || target) {
    return (
      <a className={classes} href={href} target={target} rel={target ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
