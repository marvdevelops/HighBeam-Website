import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
}

export function Section({ id, className, children, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-40", className)}>
      <div className={cn("w-full px-8 md:px-16 lg:px-24", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
