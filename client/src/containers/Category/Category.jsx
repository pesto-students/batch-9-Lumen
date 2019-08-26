import React from 'react'
import MovableStackedCard from "../../components/MovableStackedCard/MovableStackedCard";
import styles from './Category.module.css';

const Category = () => {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}> Category 1</h1>
            <MovableStackedCard />
            <h1 className={styles.title}> Category 2</h1>
            <MovableStackedCard />
            <h1 className={styles.title}> Category 3</h1>
            <MovableStackedCard />
            <h1 className={styles.title}> Category 4</h1>
            <MovableStackedCard />
            <h1 className={styles.title}> Category 5</h1>
            <MovableStackedCard />
            <h1 className={styles.title}> Category 6</h1>
            <MovableStackedCard />
            <h1 className={styles.title}> Category 7</h1>
            <MovableStackedCard />
            <h1 className={styles.title}> Category 8</h1>
            <MovableStackedCard />
            <h1 className={styles.title}> Category 9</h1>
            <MovableStackedCard />
            <h1 className={styles.title}> Category 10</h1>
            <MovableStackedCard />
        </div>
    )
}

export default Category;
