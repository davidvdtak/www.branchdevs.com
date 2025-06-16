"use client";

import React, { CSSProperties, forwardRef } from "react";
import classNames from "classnames";

import {
  GridProps,
  SpacingProps,
  SizeProps,
  StyleProps,
  CommonProps,
  DisplayProps,
  ConditionalProps,
} from "../interfaces";

import { SpacingToken, ColorScheme, ColorWeight } from "@/components/types";

interface ComponentProps extends GridProps,
    SpacingProps,
    SizeProps,
    StyleProps,
    CommonProps,
    DisplayProps,
    ConditionalProps {}

const Grid = forwardRef<HTMLDivElement, ComponentProps>(
  (
    {
      as: Component = "div",
      inline,
      columns,
      gap,
      position,
      aspectRatio,
      align,
      textVariant,
      textSize,
      textWeight,
      textType,
      tabletColumns,
      mobileColumns,
      padding,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      paddingX,
      paddingY,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      marginX,
      marginY,
      width,
      height,
      maxWidth,
      minWidth,
      minHeight,
      maxHeight,
      top,
      right,
      bottom,
      left,
      fit,
      fill,
      fillWidth = false,
      fillHeight = false,
      fitWidth,
      fitHeight,
      hide,
      show,
      background,
      solid,
      opacity,
      transition,
      pointerEvents,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      borderStyle,
      borderWidth,
      radius,
      topRadius,
      rightRadius,
      bottomRadius,
      leftRadius,
      topLeftRadius,
      topRightRadius,
      bottomLeftRadius,
      bottomRightRadius,
      overflow,
      overflowX,
      overflowY,
      cursor,
      zIndex,
      shadow,
      className,
      style,
      children,
      ...rest
    },
    ref,
  ) => {
    const generateDynamicClass = (type: string, value: string | "-1" | undefined) => {
      if (!value) return undefined;

      if (value === "transparent") {
        return `transparent-border`;
      }

      if (value === "surface" || value === "page" || value === "transparent") {
        return `${value}-${type}`;
      }

      const parts = value.split("-");
      if (parts.includes("alpha")) {
        const [scheme, , weight] = parts;
        return `${scheme}-${type}-alpha-${weight}`;
      }
      
      const [scheme, weight] = value.split("-") as [ColorScheme, ColorWeight];
      return `${scheme}-${type}-${weight}`;
    };

    const parseDimension = (
      value: number | SpacingToken | undefined,
      type: "width" | "height",
    ): string | undefined => {
      if (value === undefined) return undefined;
      if (typeof value === "number") return `${value}rem`;
      if (
        [
          "0",
          "1",
          "2",
          "4",
          "8",
          "12",
          "16",
          "20",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64",
          "80",
          "104",
          "128",
          "160",
        ].includes(value)
      ) {
        return `var(--static-space-${value})`;
      }
      if (["xs", "sm", "md", "lg", "xl"].includes(value)) {
        return `var(--responsive-${type}-${value})`;
      }
      return undefined;
    };

    const classes = classNames(
      inline ? "inline-grid" : "grid",
      fit && "w-fit h-fit",
      fitWidth && "w-fit",
      fitHeight && "h-fit",
      fill && "w-full h-full",
      (fillWidth || maxWidth) && "w-full",
      (fillHeight || maxHeight) && "h-full",
      columns && `grid-cols-${columns} lg:grid-cols-${columns}`,
      tabletColumns && `md:grid-cols-${tabletColumns}`,
      mobileColumns && `grid-cols-${mobileColumns}`,
      overflow && `overflow-${overflow}`,
      overflowX && `overflow-x-${overflowX}`,
      overflowY && `overflow-y-${overflowY}`,
      padding && `p-${padding}`,
      paddingLeft && `pl-${paddingLeft}`,
      paddingRight && `pr-${paddingRight}`,
      paddingTop && `pt-${paddingTop}`,
      paddingBottom && `pb-${paddingBottom}`,
      paddingX && `px-${paddingX}`,
      paddingY && `py-${paddingY}`,
      margin && `m-${margin}`,
      marginLeft && `ml-${marginLeft}`,
      marginRight && `mr-${marginRight}`,
      marginTop && `mt-${marginTop}`,
      marginBottom && `mb-${marginBottom}`,
      marginX && `mx-${marginX}`,
      marginY && `my-${marginY}`,
      gap && `gap-${gap}`,
      top && `top-${top}`,
      right && `right-${right}`,
      bottom && `bottom-${bottom}`,
      left && `left-${left}`,
      generateDynamicClass("background", background),
      generateDynamicClass("solid", solid),
      generateDynamicClass("border", border || borderTop || borderRight || borderBottom || borderLeft),
      (border || borderTop || borderRight || borderBottom || borderLeft) && !borderStyle && "border-solid",
      border && !borderWidth && `border-1`,
      (borderTop || borderRight || borderBottom || borderLeft) && "border-0",
      borderTop && "border-t-1",
      borderRight && "border-r-1",
      borderBottom && "border-b-1",
      borderLeft && "border-l-1",
      borderWidth && `border-${borderWidth}`,
      borderStyle && `border-${borderStyle}`,
      radius === "full" ? "rounded-full" : radius && `rounded-${radius}`,
      topRadius && `rounded-t-${topRadius}`,
      rightRadius && `rounded-r-${rightRadius}`,
      bottomRadius && `rounded-b-${bottomRadius}`,
      leftRadius && `rounded-l-${leftRadius}`,
      topLeftRadius && `rounded-t-${topLeftRadius} rounded-l-${topLeftRadius}`,
      topRightRadius && `rounded-t-${topRightRadius} rounded-r-${topRightRadius}`,
      bottomLeftRadius && `rounded-b-${bottomLeftRadius} rounded-r-${bottomLeftRadius}`,
      bottomRightRadius && `rounded-b-${bottomRightRadius} rounded-r-${bottomRightRadius}`,
      hide && (hide === "sm" ? "sm:hidden" : (hide === "md" ? "md:hidden" : "lg:hidden")),
      show && (show === "sm" ? "sm:flex" : (show === "md" ? "md:flex" : "lg:flex")),
      pointerEvents && (pointerEvents === "auto" ? "pointer-events-auto" : "pointer-events-none"), 
      transition && `transition-${transition}`,
      shadow && `shadow-${shadow}`,
      position && `${position}`,
      zIndex && `z-${zIndex}`,
      textType && `font-${textType}`,
      cursor && `cursor-${cursor}`,
      className,
    );

    const combinedStyle: CSSProperties = {
      maxWidth: parseDimension(maxWidth, "width"),
      minWidth: parseDimension(minWidth, "width"),
      minHeight: parseDimension(minHeight, "height"),
      maxHeight: parseDimension(maxHeight, "height"),
      width: parseDimension(width, "width"),
      height: parseDimension(height, "height"),
      aspectRatio: aspectRatio,
      textAlign: align,
      ...style,
    };

    return (
      <Component ref={ref} className={classes} style={combinedStyle} {...rest}>
        {children}
      </Component>
    );
  },
);

Grid.displayName = "Grid";

export { Grid };
export type { GridProps };
