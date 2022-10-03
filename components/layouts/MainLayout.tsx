import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from './MainLayout.module.css';
import { FC } from 'react';
type PropsWithChildren = {
  children: React.ReactNode
}

export const MainLayout: FC<PropsWithChildren>  = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Contact - jere</title>
            <meta name="description" content="Contact page" />
            <link rel="icon" href="/logoWia.ico" />
          </Head>
          <Navbar/>
          <main className={styles.main}>
            { children }
          </main>
        </div>
      )
}
