import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { getPortfolioConfig } from "@/config/portfolio.config";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const portfolioConfig = getPortfolioConfig(locale);

  return (
    <>
      {/* LEFT SIDE */}
      <FramerWrapper
        className="h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts portfolioConfig={portfolioConfig} />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks portfolioConfig={portfolioConfig} />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>

      {/* RIGHT SIDE image */}
      <FramerWrapper
        className="h-full w-[30%] relative block max-lg:hidden"
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON */}
      <GithubBtn />
    </>
  );
}
