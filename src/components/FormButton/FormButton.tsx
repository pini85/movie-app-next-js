"use client";
import React, { FC } from "react";
import clsx from "clsx";
import { useFormStatus } from "react-dom";
import styles from "./formButton.module.css";
import { FormButtonProps } from "./FormButton.types";

const FormButton: FC<FormButtonProps> = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(styles.buttonContainer, {
        [styles.buttonContainerDisabled]: pending,
      })}
      aria-disabled={pending}
      type="submit"
    >
      {children}
    </button>
  );
};
export default FormButton;
//  className={clsx(styles.container,{[
//       'styles.container--pending'
//     ]})}
