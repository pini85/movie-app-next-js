"use client";
import React, { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import styles from "./hamburgerNavigation.module.css";
import LightSwitch from "../LightSwitch/LightSwitch";
import Customize from "../Customize/Customize";
import Search from "../Search/Search";

const navLinks = [
  { name: "home", href: "/" },
  { name: "AI generated movies", href: "/ai-generated-movies" },
  { name: "movies", href: "/movies" },
  // { name: 'tv shows', link: '/tv/latest/page/1' },
  { name: "advanced search", href: "/advanced-search" },
  { name: "popular actors", href: "/popular-actors/page/1" },
];

const HamburgerNavigation = () => {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.hamburgerNavigation}>
        <div className={styles.hamburgerNavigation__wrapper}>
          <LightSwitch />
          <Customize />
        </div>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.hamburgerNavigation__nav}>
          {navLinks.map((link) => {
            return (
              <Link
                className={clsx(styles.hamburgerNavigation__link, {
                  [styles.hamburgerNavigation__linkActive]:
                    pathname === link.href,
                })}
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default HamburgerNavigation;
