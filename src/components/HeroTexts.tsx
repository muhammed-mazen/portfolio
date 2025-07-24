'use client';

import TextRotator from "./TextRotator";
import { useTranslations } from "next-intl";

const HeroTexts = ({ portfolioConfig }: { portfolioConfig: any }) => {
  const t = useTranslations("Hero");

  const nameParts = portfolioConfig.name.split(" ");
  const firstName = nameParts[0];
  const middleName = nameParts.length > 2 ? nameParts[1] : "";
  const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];

  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">
        {t("MyNameIs")}
      </h3>
      <h1 className="font-rubik md:text-8xl sm:text-6xl name_underline text-primary max-sm:text-6xl">
        {firstName} {middleName} <br /> {lastName}.
      </h1>
      <TextRotator portfolioConfig={portfolioConfig} />
    </>
  );
};

export default HeroTexts;
