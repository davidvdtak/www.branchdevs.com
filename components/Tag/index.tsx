"use client";

import React, { forwardRef, ReactNode } from "react";
import classNames from "classnames";

import { Flex, Text, Icon } from "../";
import styles from "./Tag.module.scss";

interface TagProps extends React.ComponentProps<typeof Flex> {
  variant?: "brand" | "accent" | "warning" | "success" | "danger" | "neutral" | "info" | "gradient";
  size?: "sm" | "md" | "lg";
  label?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  children?: ReactNode;
}

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      variant = "neutral",
      size = "md",
      label = "",
      prefixIcon,
      suffixIcon,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const paddingSize = size === "sm" ? "2" : "4";

    return (
      <Flex
        fitWidth
        borderWidth={1}
        borderStyle="solid"
        vertical="center"
        radius="lg"
        gap="4"
        ref={ref}
        className={classNames(styles.tag, styles[variant], styles[size], className)}
        {...rest}
      >
        {prefixIcon && <Icon name={prefixIcon} size="xs" />}
        <Flex style={{ userSelect: "none" }} paddingX={paddingSize} vertical="center">
          <Text as="span" variant="label-default-sm">
            {label || children}
          </Text>
        </Flex>
        {suffixIcon && <Icon name={suffixIcon} size="xs" />}
      </Flex>
    );
  },
);

Tag.displayName = "Tag";

export { Tag };
export type { TagProps };
