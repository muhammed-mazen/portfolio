import { portfolioTextsEn } from "./portfolio.config.en";
import { portfolioTextsAr } from "./portfolio.config.ar";
import { socialLinks, seo, apiKeys } from "./portfolio.config.shared";

export function getPortfolioConfig(locale: string) {
  const text = locale === "ar" ? portfolioTextsAr : portfolioTextsEn;

  return {
    ...text,
    socialLinks,
    seo,
    apiKeys,
  };
}
