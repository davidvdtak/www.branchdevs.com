"use client";

import React, { useState } from "react";
import { site } from "@/lib/config/site";
import { Column, Flex, LogoIcon, Row, Text, ToggleButton } from "@/components";
import Link from "next/link";


export const Navbar = () => {
  const [theme, setTheme] = useState(site.theme);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
      <Row
        data-border="rounded"
        horizontal="space-between"
        fillWidth        
        paddingX="32"
        paddingY="20"
      >
        <Column>
          <Link href="/" className="flex items-center gap-4 no-underline!" rel="nofollow">
            <LogoIcon height="25" width="25" fill={theme === "dark" ? "#ffffff" : "#000000"} />
            <Text variant="body-default-lg" className={theme === "dark" ? "text-white" : "text-black"}>BranchDevs</Text>
          </Link>
        </Column>
        <Flex gap="-1">
          {[
            theme === "dark" ? { label: "", value: "light", prefixIcon: "light" } : { label: "", value: "dark", prefixIcon: "dark" },
          ].map((button, index) => {
            return (
              <ToggleButton
                selected={false}
                variant="outline"
                key={button.value}
                onClick={() => setTheme(button.value as "light" | "dark")}
                role="tab"
                fillWidth={true}
                size="md"
                prefixIcon={button.prefixIcon}
              />
            );
          })}
        </Flex>
      </Row>
    </Row>
  )
};