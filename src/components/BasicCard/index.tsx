import React, { ReactNode } from "react";
import { CardWrap } from "./styled";
import theme from "../../theme";


interface Props {
  children: ReactNode;
  customStyles?: {[key: string]: any};
  title?: string;
  actions?: ReactNode;
  footer?: ReactNode;
}

const BasicCard: React.FC<Props> = ({
  children,
  customStyles,
  title,
  actions,
  footer
}) => {
  return (
    <CardWrap $customStyles={customStyles} theme={theme}>
      <div className="card">
        {title && (
          <div className="card-header">
            <h5 className="card-title">{title}</h5>
            {actions}
          </div>
        )}
        <div className="card-body">
          {children}
        </div>
        {footer && (
          <div className="card-footer">{footer}</div>
        )}
      </div>
    </CardWrap>
  );
};

export default BasicCard;
