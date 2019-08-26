import React from 'react';
import styles from './MovableStackedCard.module.scss';
import BlogCard from '../BlogCard/index'

const MovableStackedCard = () => {
    return (
        <div className={styles.background}>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.cardContainer}>
                        <BlogCard />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContainer}>
                        <BlogCard />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContainer}>
                        <BlogCard />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContainer}>
                        <BlogCard />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContainer}>
                        <BlogCard />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MovableStackedCard
