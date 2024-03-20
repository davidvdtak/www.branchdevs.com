import React from 'react';
import styles from '../styles.module.scss';

const NotFoundPage = () => {

  return (
    <div className={styles.errorWrap}>
      <div>
        <h1>404 - Not Found</h1>
        <p>Oops! The page you're looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;