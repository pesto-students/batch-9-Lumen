import React from 'react';
import { connect } from 'react-redux';
import MovableStackedCard from "../../components/MovableStackedCard/MovableStackedCard";
import styles from './Category.module.css';

const Category = ({
    categories = [],
}) => {
    const categoriesCards = categories.map((category) => {
       return( <>
       <h1 className={styles.title}> {category.name}</h1>
            <MovableStackedCard {...category} />
       </>)
    })
    return (
        <div className={styles.background}>
          {categoriesCards}
        </div>
    )
}
const mapStateToProps = (state) => ({
    categories: state.home.categories,
  })
  
  export default connect(mapStateToProps, {})(Category);
