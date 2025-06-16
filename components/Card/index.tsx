"use client";

import React, { forwardRef } from "react";
import styles from "./Card.module.scss";
import { Flex } from "../";
import { ElementType } from "../ElementType";
import classNames from "classnames";

interface CardProps extends React.ComponentProps<typeof Flex> {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, href, onClick, style, className, ...rest }, ref) => {
    return (
      <ElementType
        className={classNames("bg-none", "p-0", "outline-none", "border-0", "w-full", onClick && "focus-visible:outline focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-primary focus-visible:outline-offset-2", onClick && "rounded-lg")}
        href={href}
        onClick={onClick}
        ref={ref}>
        <Flex
          background="surface"
          transition="macro-medium"
          border="neutral-medium"
          cursor="pointer"
          className={styles.card}
          onClick={onClick}
          {...rest}
        >
          {children}
        </Flex>
      </ElementType>
    );
  },
);

Card.displayName = "Card";
export { Card };