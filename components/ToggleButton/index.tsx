"use client";

import React, { forwardRef, ReactNode } from "react";
import classNames from "classnames";
import { ElementType } from "../ElementType";
import { Flex, Icon } from "../";
import styles from "./ToggleButton.module.scss";

interface CommonProps {
  label?: ReactNode;
  selected: boolean;
  variant?: "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  radius?:
    | "none"
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-left"
    | "top-right"
    | "bottom-right"
    | "bottom-left";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  fillWidth?: boolean;
  weight?: "default" | "strong";
  truncate?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  href?: string;
}

export type ToggleButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ToggleButton = forwardRef<HTMLElement, ToggleButtonProps>(
  (
    {
      label,
      selected,
      variant = "ghost",
      size = "md",
      radius,
      justifyContent = "center",
      fillWidth = false,
      weight = "default",
      truncate = false,
      prefixIcon,
      suffixIcon,
      className,
      style,
      children,
      href,
      ...props
    },
    ref,
  ) => {
    return (
      <ElementType
        ref={ref}
        href={href}
        className={classNames(
          styles.button,
          styles[variant],
          styles[size],
          selected && styles.selected,
          radius === "none" ? "rounded-none" : (radius ? `rounded-${radius}-${size}` : `rounded-${size}`),
          "no-underline",
          "button",
          "cursor-pointer",
          {
            ["w-full"]: fillWidth,
            ["w-fit"]: !fillWidth,
            ["justify-" + justifyContent]: justifyContent,
          },
          className,
        )}
        style={style}
        {...props}
      >
        {prefixIcon && <Icon name={prefixIcon} size={size === "lg" ? "sm" : "xs"} />}
        {(label || children) && (
          <Flex
            padding={size === "sm" ? "2" : "4"}
            textWeight={weight}
            textSize={size === "lg" ? "md" : "sm"}
          >
            {label || children}
          </Flex>
        )}
        {suffixIcon && <Icon name={suffixIcon} size={size === "lg" ? "md" : "sm"} />}
      </ElementType>
    );
  },
);

ToggleButton.displayName = "ToggleButton";
export { ToggleButton };
