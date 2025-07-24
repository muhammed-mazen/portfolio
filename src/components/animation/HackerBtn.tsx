"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations, useLocale } from "next-intl";

const HackerBtn = ({ label }: { label: string }) => {
  const t = useTranslations();
  const locale = useLocale();
  const finalLabel = t(label); // Use key instead of raw label

  const [displayText, setDisplayText] = useState(finalLabel);
  const charset =
    locale === "ar"
      ? "ابتثجحخدذرزسشصضطظعغفقكلمنهوي"
      : "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(finalLabel);
    setTimeout(() => console.log("Submitted"), finalLabel.length * 50);
  };

  useEffect(() => {
    setDisplayText(finalLabel);
  }, [finalLabel]);

  return (
    <Button
      size="lg"
      className="text-base px-5 py-6 rtl:flex-row-reverse rtl:gap-2"
      onMouseEnter={startScrambling}
    >
      <Download className="mx-1" />
      {displayText}
    </Button>
  );
};

export default HackerBtn;
