import React from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import MovableStackedCard from '../../components/MovableStackedCard/MovableStackedCard';
import styles from './Category.module.css';

const Category = ({ categories = [] }) => {
  const categoriesCards = categories.map(category => {
    return (
      <>
        <Divider inverted horizontal>
          <h1 className={styles.title}> {category.name}</h1>
        </Divider>
        <MovableStackedCard {...category} />
      </>
    );
  });
  return (
    <div className={styles.background}>
      <div className={styles.container}>{categoriesCards}</div>
    </div>
  );
};
const mapStateToProps = state => ({
  categories: state.home.categories
});

export default connect(
  mapStateToProps,
  {}
)(Category);
