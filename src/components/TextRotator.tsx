"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const TextRotator = ({ portfolioConfig }: { portfolioConfig: any }) => {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const roles = portfolioConfig.skills.roles;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="py-4 rounded-md flex flex-col items-start overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl text-gray-700 dark:text-gray-400">
        {t("IAmA")} {portfolioConfig.title} &nbsp; {t("&")} &nbsp;
        <span className="inline-block text-[#606ff8] font-rubik text-lg sm:text-3xl relative h-[1em] rtl:pl-28">

          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 top-0"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
    </div>
  );
};

export default TextRotator;
