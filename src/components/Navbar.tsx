"use client";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  User,
  Sun,
  Moon,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const nextLocale = locale === "en" ? "ar" : "en";
  const t = useTranslations('Navbar');
  const data = [
    { title: t('Home'), icon: <HomeIcon />, href: '/' },
    { title: t('About'), icon: <User />, href: '/about' },
    { title: t('Skills'), icon: <LightbulbIcon />, href: '/skills' },
    { title: t('Education'), icon: <GraduationCap />, href: '/education' },
    { title: t('Projects'), icon: <FolderGit2 />, href: '/projects' },
    { title: t('Contact'), icon: <Mail />, href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? "hidden" : "block"}`}>
      <Dock className="items-end pb-3 rounded-full max-sm:pb-1 max-sm:gap-1">
        {data.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-gray-200 dark:bg-primary-sky max-sm:w-10 max-sm:h-10 p-1",
                pathname === item.href && "bg-gray-100 !border !border-primary-sky"
              )}
            >
              <DockLabel className="text-sm max-sm:text-[10px]" >{item.title}</DockLabel>
              <DockIcon className={cn("max-sm:w-5 max-sm:h-5", pathname === item.href && "text-[#606ff8]")}>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
        <div className="sm:hidden md:flex">
          <div className="mx-2 h-8 mt-1 w-px bg-gray-300 dark:bg-neutral-700 self-center" />

          {/* Language Toggle */}
          <Link href={'/'} locale={nextLocale}>
            <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-primary-sky cursor-pointer p-1 mx-1">
              <DockLabel>{t('Language')}</DockLabel>
              <DockIcon>
                <span className="font-rubik text-xl">{nextLocale == 'en' ? 'ع' : 'En'}</span>
              </DockIcon>
            </DockItem>
          </Link>

          {/* Theme Toggle */}
          <DockItem
            className="aspect-square rounded-full bg-gray-200 dark:bg-primary-sky cursor-pointer p-1"
            onClick={handleToggleTheme}
          >
            <DockLabel>{theme === "light" ? t('DarkMode') : t('LightMode')}</DockLabel>
            <DockIcon>
              {theme === "light" ? <Moon className="h-full w-full" /> : <Sun className="h-full w-full" />}
            </DockIcon>
          </DockItem>
        </div>
      </Dock>
      <div className={cn(
        "sm:flex md:hidden fixed bottom-4 z-[9999999] flex gap-2",
        locale === 'ar' ? "left-4" : "right-4"
      )}>
        <Link href={'/'} locale={nextLocale}>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-primary-sky">
            <span className="font-rubik text-xl">{nextLocale == 'en' ? 'ع' : 'En'}</span>
          </div>
        </Link>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-primary-sky"
          onClick={handleToggleTheme}
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </div>
      </div>
    </div >
  );
};

export default Navbar;
