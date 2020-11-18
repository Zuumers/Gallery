import React from 'react';
import styles from '../MantisSpec2.css';

function MantisSpec2() {

  return(
    <div className={styles.SpecsChart}>
      <div className={styles.Description}>DESCRIPTION</div>
      <div className={styles.Specs}>SPECS</div>
      <div className={styles.Throttle}>THROTTLE</div>
      <div className={styles.Warranty}>WARRANTY</div>
      <div className={styles.Manufacture}>MANUFACTURE</div>
      <div className={styles.text}>
        <h3> A 40mph electric scooter made to delight the advanced rider</h3><br></br>
        <li>Commuter scooter - tired of low performance scooters? The Mantis will make you look forward to your daily commute.</li>
      </div>
    </div>
  )
}

export default MantisSpec2;