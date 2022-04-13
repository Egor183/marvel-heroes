import React, { memo } from "react";
import cn from "classnames";
import Head from "next/head";
import Link from "next/link";
import { MainLayoutType } from "types/main-layout.types";

import styles from "./styles.module.css";

const MainLayout: React.FC<MainLayoutType> = ({
  children,
  title,
  HeaderComponent,
}) => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.headerContainer, styles.padding)}>
        <Head>
          <title>{title}</title>
          <meta name="keywords" content="marvel,heroes,superheroes" />
          <meta name="description" content="this is list of marvel heroes" />
          <meta charSet="utf-8" />
        </Head>
        <div className={styles.navWrapper}>
          <nav>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </nav>
          {HeaderComponent}
        </div>
        <h1 className={styles.header}>{title}</h1>
      </div>
      <main>
        <div className={cn(styles.mainContainer, styles.padding)}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default memo(MainLayout);
