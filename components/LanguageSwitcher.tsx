"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ja" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{locale}</span>
    </button>
  );
}
