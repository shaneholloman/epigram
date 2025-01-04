import { cn } from "@/lib/utils";

export function NextJsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("", className)}>
      <path
        fill="currentColor"
        d="M18.974 31.5a1.5 1.5 0 1 1-3 0v-14a1.499 1.499 0 0 1 2.724-.867l16.777 23.704C40.617 36.709 44 30.735 44 24c0-11-9-20-20-20S4 13 4 24s9 20 20 20c3.192 0 6.206-.777 8.89-2.122L18.974 22.216V31.5zm10-15a1.5 1.5 0 1 1 3 0v13.84l-3-4.227V16.5z"
      />
    </svg>
  );
} 