"use client";
import React, { useState } from "react";
import clsx from "clsx";
import styles from "./lightswitch.module.css";

const LightSwitch = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((value) => !value);
    console.log("clicked");
  };
  return (
    <div
      className={clsx(styles.lightSwitch, {
        [styles.lightSwitchToggle]: toggle,
      })}
      onClick={handleClick}
    />
  );
};

export default LightSwitch;
