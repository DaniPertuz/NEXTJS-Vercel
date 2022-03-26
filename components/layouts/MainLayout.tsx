import { FC } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import styles from '../../styles/Home.module.css'

const MainLayout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Daniel Pertuz</title>
                <meta name="description" content="Home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

export default MainLayout;