"use client";

import classNames from "classnames";
import { CSSProperties, forwardRef } from "react";

import {
  CommonProps,
  ConditionalProps,
  DisplayProps,
  FlexProps,
  SizeProps,
  SpacingProps,
  StyleProps,
} from "../interfaces";

import { ColorScheme, ColorWeight, SpacingToken, TextVariant } from "../types";

interface ComponentProps
  extends FlexProps,
    SpacingProps,
    SizeProps,
    StyleProps,
    CommonProps,
    DisplayProps,
    ConditionalProps {}

const Flex = forwardRef<HTMLDivElement, ComponentProps>(
  (
    {
      as: Component = "div",
      inline,
      direction,
      tabletDirection,
      mobileDirection,
      wrap = false,
      horizontal,
      vertical,
      flex,
      textVariant,
      textSize,
      textWeight,
      textType,
      onBackground,
      onSolid,
      align,
      top,
      right,
      bottom,
      left,
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
      gap,
      position,
      center,
      width,
      height,
      maxWidth,
      minWidth,
      minHeight,
      maxHeight,
      fit = false,
      fitWidth = false,
      fitHeight = false,
      fill = false,
      fillWidth = false,
      fillHeight = false,
      aspectRatio,
      hide,
      show,
      transition,
      background,
      solid,
      opacity,
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
      zIndex,
      shadow,
      cursor,
      className,
      style,
      children,
      ...rest
    },
    ref,
  ) => {
    if (onBackground && onSolid) {
      console.warn(
        "You cannot use both 'onBackground' and 'onSolid' props simultaneously. Only one will be applied.",
      );
    }

    if (background && solid) {
      console.warn(
        "You cannot use both 'background' and 'solid' props simultaneously. Only one will be applied.",
      );
    }

    const getVariantClasses = (variant: TextVariant) => {
      const [fontType, weight, size] = variant.split("-");
      return [`font-${fontType}`, `font-${weight}`, `text-${size}`];
    };

    const sizeClass = textSize ? `text-${textSize}` : "";
    const weightClass = textWeight ? `font-${textWeight}` : "";

    const variantClasses = textVariant ? getVariantClasses(textVariant) : [sizeClass, weightClass];

    let colorClass = "";
    if (onBackground) {
      const [scheme, weight] = onBackground.split("-") as [ColorScheme, ColorWeight];
      colorClass = `${scheme}-on-background-${weight}`;
    } else if (onSolid) {
      const [scheme, weight] = onSolid.split("-") as [ColorScheme, ColorWeight];
      colorClass = `${scheme}-on-solid-${weight}`;
    }

    const generateDynamicClass = (type: string, value: string | undefined) => {
      if (!value) return undefined;

      if (value === "transparent") {
        return `transparent-border`;
      }

      if (["surface", "page", "overlay"].includes(value)) {
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

    const classes = classNames(      
      inline ? "inline-flex" : "flex",
      direction && `flex-${direction.replace("column",'col')} lg:flex-${direction.replace("column",'col')}`,
      tabletDirection && `md:flex-${tabletDirection.replace("column",'col')}`,
      mobileDirection && `!flex-${mobileDirection.replace("column",'col')}`,
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
      gap === "-1" ? direction === "column" || direction === "column-reverse" ? "gap-y-1" : "gap-x-1" : gap && `gap-${gap}`,
      top && `top-${top}`,
      right && `right-${right}`,
      bottom && `bottom-${bottom}`,
      left && `left-${left}`,
      generateDynamicClass("background", background),
      generateDynamicClass("solid", solid),
      generateDynamicClass("border", border || borderTop || borderRight || borderBottom || borderLeft),
      (border || borderTop || borderRight || borderBottom || borderLeft) && !borderStyle && "border-solid",
      border && !borderWidth && "border-1",
      (borderTop || borderRight || borderBottom || borderLeft) && "border-0",
      borderTop && "border-t-1",
      borderRight && "border-r-1",
      borderBottom && "border-b-1",
      borderLeft && "border-l-1",
      borderWidth && `border-${borderWidth}`,
      borderStyle && `border-${borderStyle}`,
      radius === "full" ? "rounded-full" : radius && `rounded-${radius}`,
      topRadius && `rounded-t-${topRadius}`,
      rightRadius && `round-r-${rightRadius}`,
      bottomRadius && `rounded-b-${bottomRadius}-bottom`,
      leftRadius && `rounded-l-${leftRadius}`,
      topLeftRadius && `rounded-t-${topLeftRadius} rounded-l-${topLeftRadius}`,
      topRightRadius && `rounded-t-${topRightRadius} rounded-r-${topRightRadius}`,
      bottomLeftRadius && `rounded-bottom-${bottomLeftRadius} rounded-l-${bottomLeftRadius}`,
      bottomRightRadius && `rounded-bottom-${bottomRightRadius} rounded-l-${bottomRightRadius}`,
      hide && (hide === "sm" ? "sm:hidden" : (hide === "md" ? "md:hidden" : "lg:hidden")),
      show && (show === "sm" ? "sm:flex" : (show === "md" ? "md:flex" : "lg:flex")),
      pointerEvents && (pointerEvents === "auto" ? "pointer-events-auto" : "pointer-events-none"), 
      transition && `transition-${transition}`,
      opacity && `opacity-${opacity}`,
      wrap && "flex-wrap",
      overflow && `overflow-${overflow}`,
      overflowX && `overflow-x-${overflowX}`,
      overflowY && `overflow-y-${overflowY}`,
      flex && `flex-${flex}`,
      horizontal && ((direction === "row" || direction === "row-reverse" || direction === undefined) ? `justify-${horizontal}` : `items-${horizontal}`),
      vertical && ((direction === "row" || direction === "row-reverse" || direction === undefined) ? `items-${vertical}` : `justify-${vertical}`),
      center && "justify-center items-center",
      fit && "w-fit h-fit",
      fitWidth && "w-fit",
      fitHeight && "h-fit",
      fill && "w-full h-full",
      fillWidth && !minWidth && "min-w-px",
      fillHeight && !minHeight && "min-h-px",
      fill && "min-h-px",
      fill && "min-w-px",
      (fillWidth || maxWidth) && "w-full",
      (fillHeight || maxHeight) && "h-full",
      shadow && `shadow-${shadow}`,
      position && `${position}`,
      zIndex && `z-${zIndex}`,
      textType && `font-${textType}`,
      cursor && `cursor-${cursor}`,
      colorClass,
      className,
      ...variantClasses,
    );

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

Flex.displayName = "Flex";
export { Flex };