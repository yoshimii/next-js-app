import React from 'react';
import { useRouter } from 'next/router'
import { MdChevronLeft, MdAccountCircle, MdMoreVert } from 'react-icons/md';
import styles from '../styles/TopAppBar.module.css';

const TopAppBar = () => {
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/')
    }

    return (
        <nav className={`${styles.topappbar} ${styles.nav}`}>
            {router.pathname !== '/categories' ? (
                <span className={styles.mainicon}>
                    <MdAccountCircle />
                </span>
            ) : (
                <>
                <span className={styles.mainicon}>
                    <MdChevronLeft onClick={() => router.back()}/>
                </span>
                <span className={styles.mainicon}>
                    <MdMoreVert className={styles.moreicon} onClick={handleLogout}/>
                </span>
                </>
            )             
            }
        </nav>
    );
};

export default TopAppBar;