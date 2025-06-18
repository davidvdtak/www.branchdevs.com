import React, { useEffect, useState } from "react";
import { site } from "@/lib/config/site";

export default function useThemeObserver(){
  const [theme, setTheme] = useState(site.theme ?? "light");

  useEffect(() => {
    const root = document.documentElement;

    const observer = new MutationObserver(() => {
      const newTheme = root.getAttribute("data-theme") as "light" | "dark";
      setTheme(newTheme);
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
};
