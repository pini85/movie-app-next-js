"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import styles from "./hamburger.module.css";
import HamburgerNavigation from "../HamburgerNavigation/HamburgerNavigation";

const Hamburger = () => {
  const pathName = usePathname();
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    e.stopPropagation();
    setToggleHamburger((value) => !value);
  };

  useEffect(() => {
    setToggleHamburger(false);
  }, [pathName]);

  return (
    <>
      {toggleHamburger && (
        <div className={styles.hamburgerOverlay} onClick={handleClick} />
      )}
      <div className={styles.hamburger} onClick={handleClick}>
        <span
          onClick={handleClick}
          className={clsx(styles.hamburger__handleBars, {
            [styles.hamburger__handleBarsOpen]: toggleHamburger,
          })}
        ></span>
        <AnimatePresence>
          {toggleHamburger && (
            <motion.div
              style={{ zIndex: "999" }}
              initial={{ transform: "translateX(-400px)" }}
              animate={{ transform: "translateX(0px)" }}
              exit={{ transform: "translateX(-400px)" }}
              transition={{ duration: 0.8 }}
            >
              <HamburgerNavigation />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Hamburger;
