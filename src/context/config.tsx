"use client";

import { createContext, useContext } from "react";

type PortfolioConfig = ReturnType<typeof import("@/config/portfolio.config").getPortfolioConfig>;

const PortfolioContext = createContext<PortfolioConfig | null>(null);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider = ({
  config,
  children,
}: {
  config: PortfolioConfig;
  children: React.ReactNode;
}) => {
  return (
    <PortfolioContext.Provider value={config}>
      {children}
    </PortfolioContext.Provider>
  );
};
