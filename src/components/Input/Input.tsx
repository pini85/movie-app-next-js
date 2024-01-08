"use client";
import React, { FC } from "react";
import { InputProps } from "./input.types";
import styles from "./input.module.css";
const Input: FC<InputProps> = ({ placeholder, type, name, onChange }) => {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e)}
    />
  );
};
export default Input;
