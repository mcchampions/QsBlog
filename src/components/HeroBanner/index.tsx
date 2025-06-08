import React from 'react';
import styles from './styles.module.scss';

const HeroBanner = ({ title, subheading }) => {
    return (
        <div
            className={styles.heroBanner}
        >
            <div className={styles.textSection}>
                <h1>{title}</h1>
                <p>{subheading}</p>
            </div>
        </div>
    );
};

export default HeroBanner;