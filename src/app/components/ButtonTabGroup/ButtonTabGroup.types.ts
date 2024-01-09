import React, { ReactElement } from "react";

export interface ButtonTabProps {
  queryValue: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ButtonTabGroupProps {
  children: ReactElement<ButtonTabProps> | ReactElement<ButtonTabProps>[];
}
