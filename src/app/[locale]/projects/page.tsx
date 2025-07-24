import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getPortfolioConfig } from "@/config/portfolio.config";

const ProjectsPage = () => {
  const locale = useLocale();
  const t = useTranslations("Projects");
  const portfolioConfig = getPortfolioConfig(locale);

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden sm:mt-28">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        {t("ProjectsBadge")}
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>{t("ProjectsHeading")}</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            {t("ProjectsDescription")}
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {portfolioConfig.projects.map((val, indx) => (
          <ProjectCards key={indx} value={val} num={indx} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
