import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GiGreenhouse } from 'react-icons/gi';
import { MdAdd } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import styles from '../styles/BottomAppBar.module.css';

const BottomAppBar = () => {
    const router = useRouter();
    const { pathname } = router;
    let view = pathname;
    
    return (
        <nav className={`${styles.bottomappbar} ${view === '/categories' ? styles.nothome : ''}`}>
            <span className={styles.mainicon}>
                <Link href="/categories"><GiGreenhouse fill={view === "/categories" ? "white" : "#017c68"} /></Link>
            </span>
            {
                view === '/categories' &&
                <span className={styles.addnewcategoryicon}>
                    <MdAdd />
                </span>
            }
                <span className={styles.spacer}>
                    <IoMdNotificationsOutline fill={view === "/categories" ? "white" : "#017c68"}/>
                </span>
        </nav>
    )
}

export default BottomAppBar;