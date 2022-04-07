import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MainLayoutType } from "types/mainLayout.types";
import styles from "./styles.module.css";

export const MainLayout: React.FC<MainLayoutType> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="marvel,heroes,superheroes" />
        <meta name="description" content="this is list of marvel heroes" />
        <meta charSet="utf-8" />
      </Head>
      <nav className={styles.navigationContainer}>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
      </nav>
      <h1 className={styles.header}>{title}</h1>
      <main>{children}</main>
    </div>
  );
};
