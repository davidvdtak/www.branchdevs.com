import React, { forwardRef } from "react";

import styles from "./Spinner.module.scss";
import { Flex } from "../";

interface SpinnerProps extends React.ComponentProps<typeof Flex> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "md", ariaLabel = "Loading", className, style, ...rest }, ref) => {
    return (
      <Flex
        horizontal="center"
        vertical="center"
        style={style}
        className={className}
        {...rest}
      >
        <Flex
          ref={ref}
          horizontal="center"
          vertical="center"
          className={styles[size]}
          role="status"
          aria-label={ariaLabel}
        >
          <div className={styles.spinner} />
        </Flex>
      </Flex>
    );
  },
);

Spinner.displayName = "Spinner";

export { Spinner };
