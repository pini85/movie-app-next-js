"use client";
import React, { FC } from "react";
import clsx from "clsx";
import { ButtonTabProps } from "./ButtonTab.types";
import styles from "./buttonTab.module.css";
const ButtonTab: FC<ButtonTabProps> = ({ isActive, callBack, children }) => {
  const buttonClasses = clsx(styles.button, {
    [styles["button--active"]]: isActive,
  });

  return (
    <button onClick={callBack} className={buttonClasses}>
      {children}
    </button>
  );
};
export default ButtonTab;
