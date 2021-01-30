import React from 'react';
import styles from '../styles/Categories.module.css';

const Categories = () => {
    return (
        <main className={styles.categoriescontainer}>
            <div className={styles.category}>
                <h3 className={styles.categorytitle}>Sleepy Time</h3>
            </div>
            <div className={styles.category}>
                <h3 className={styles.categorytitle}>Period Pain</h3>
            </div>
            <div className={styles.category}>
                <h3 className={styles.categorytitle}>Post Chemo Nausea</h3>
            </div>
            <div className={styles.category}>
                <h3 className={styles.categorytitle}>Hunger Busters</h3>
            </div>
        </main>
    )
}

export default Categories;