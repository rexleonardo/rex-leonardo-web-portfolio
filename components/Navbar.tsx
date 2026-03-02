"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { motion } from "framer-motion";

export function Navbar() {
  const t = useTranslations("Index.nav");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-auto mt-4 w-[95%] max-w-4xl rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300 shadow-sm"
    >
      <div className="flex h-14 items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-lg font-bold tracking-tighter cursor-pointer">
          {t("name")}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="#about"
            className="transition-colors cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            {t("about")}
          </Link>
          <Link
            href="#experience"
            className="transition-colors cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            {t("experience")}
          </Link>
          <Link
            href="#skills"
            className="transition-colors cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            {t("skills")}
          </Link>
          <Link
            href="#projects"
            className="transition-colors cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            {t("projects")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
