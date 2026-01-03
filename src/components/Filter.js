import React from 'react';
import styles from '../styles/Filter.module.css';

const Filter = ({ setFilter }) => {
  return (
    <div className={styles.filterContainer}>
      <button onClick={() => setFilter('all')} className={styles.filterButton}>All</button>
      <button onClick={() => setFilter('completed')} className={styles.filterButton}>Completed</button>
      <button onClick={() => setFilter('pending')} className={styles.filterButton}>Pending</button>
    </div>
  );
};

export default Filter;
