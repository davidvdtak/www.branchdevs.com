"use client";

import React from "react";
import { site } from "@/lib/config/site";
import { Background, Column, LogoIcon, Row, Text } from "@/components";
import useThemeObserver from "@/lib/hooks/useThemeObserver";


export const Footer = () => {
  const theme = useThemeObserver();


  return (
    <Row
      position="relative"
      as="footer"
      fillWidth
      paddingX="lg"
      paddingTop="128"
      paddingBottom="80"
    >
      <Background
        fill
        borderTop="brand-alpha-strong"
        mask={{
          x: 50,
          y: 0,
        }}
        position="absolute"
        grid={{
          display: true,
          width: "0.25rem",
          color: "brand-alpha-strong",
          height: "0.25rem",
        }}
      />
      <Column
        position="relative"
        textVariant="body-default-xs"
        onBackground="neutral-medium"
        horizontal="center"
        align="center"
        fillWidth
        gap="16"
      >
        <LogoIcon height="50" width="50" fill={theme === "dark" ? "#ffffff" : "#000000"} />
        <Text size="sm" className={theme === "dark" ? "text-white" : "text-black"}>&copy; {(new Date).getFullYear()} / {site.name}</Text>           
      </Column>
    </Row>
  )
};