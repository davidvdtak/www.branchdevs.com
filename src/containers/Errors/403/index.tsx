import React from 'react';
import styles from '../styles.module.scss';

const ForbiddenPage = () => {
  
  return (
    <div className={styles.errorWrap}>
      <div>
        <h1>403 - Forbidden</h1>
        <p>You don't have permission to access this page.</p>
      </div>
    </div>
  );
};

export default ForbiddenPage;