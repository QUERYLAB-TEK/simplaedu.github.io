import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  textClassName?: string;
}

export const Logo = ({ className, textClassName }: LogoProps) => {
  return (
    <a href="#top" aria-label="SimplaEdu" className={cn("inline-flex items-center gap-2.5", className)}>
      <span aria-hidden="true" className="grid grid-cols-2 gap-[3px]">
        <i className="block h-2 w-2 rounded-[3px] bg-primary" />
        <i className="block h-2 w-2 rounded-[3px] bg-primary/55" />
        <i className="block h-2 w-2 rounded-[3px] bg-primary/55" />
        <i className="block h-2 w-2 rounded-[3px] bg-gold" />
      </span>
      <span className={cn("font-heading text-xl font-bold tracking-tight text-foreground", textClassName)}>
        Simpla<span className="text-primary">Edu</span>
      </span>
    </a>
  );
};
