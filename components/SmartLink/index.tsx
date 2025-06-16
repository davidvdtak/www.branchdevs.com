"use client";

import React, { forwardRef, ReactNode } from "react";
import classNames from "classnames";
import { Icon } from "../";
import { ElementType } from "../ElementType";

interface CommonProps {
  prefixIcon?: string;
  suffixIcon?: string;
  fillWidth?: boolean;
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl";
  selected?: boolean;
  unstyled?: boolean;
  children: ReactNode;
  href?: string;
  style?: React.CSSProperties;
  className?: string;
}

export type SmartLinkProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(
  (
    {
      href,
      prefixIcon,
      suffixIcon,
      fillWidth = false,
      iconSize = "xs",
      style,
      className,
      selected,
      unstyled = false,
      children,
      ...props
    },
    ref,
  ) => {
    const content = (
      <>
        {prefixIcon && <Icon name={prefixIcon} size={iconSize} />}
        {children}
        {suffixIcon && <Icon name={suffixIcon} size={iconSize} />}
      </>
    );

    const commonProps = {
      ref,
      className: classNames(
        className,
        "bg-none p-0 outline-none border-0 align-center inline-flex gap-8 rounded-sm",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-primary focus-visible:outline-offset-2",
        {
          "w-full": fillWidth,
          "w-fit": !fillWidth,
          "px-2 mx-2": !unstyled,
        },
      ),
      style: !unstyled
        ? {
            ...(selected && {
              textDecoration: "underline",
            }),
            ...style,
          }
        : {
            textDecoration: "none",
            ...style,
          },
      ...props,
    };

    return (
      <ElementType href={href} {...commonProps}>
        {content}
      </ElementType>
    );
  },
);

SmartLink.displayName = "SmartLink";

export { SmartLink };
