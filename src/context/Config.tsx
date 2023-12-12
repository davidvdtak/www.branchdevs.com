import React, { useContext, createContext } from "react";

import { Config } from "../server/config";

const ConfigContext = createContext<Config | undefined>(undefined);

export function useConfig(): Config {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error("Configuration context not initialized!");
  }
  return config;
}

interface ConfigProviderProps {
  config: Config;
  children: React.ReactNode;
}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, config }) => {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};