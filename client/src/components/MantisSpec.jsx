import React, { useState , useEffect} from 'react';
import styles from '../MantisInfo.css';

function MantisSpec() {


  return(
    <table className={styles.Chart}>
    <tbody>
    <tr>
      <th>Model / Battery</th>
      <th>Mantis 17.5Ah</th>
      <th>Mantis 24.5Ah</th>
    </tr>
    <tr>
      <td>Motors</td>
      <td colSpan="2">Dual 60V 1000W (BLDC)</td>
    </tr>
    <tr>
      <td>Max Range</td>
      <td>40 Miles</td>
      <td>50+ Miles</td>
    </tr>
    <tr>
      <td>Display / Throttle</td>
      <td>Smart LCD Display</td>
      <td>Mini-motors EY3</td>
    </tr>
    <tr>
      <td>Brakes</td>
      <td>Partial Hydraulic</td>
      <td>Full Hydraulic</td>
    </tr>
    <tr>
      <td>Max Speed</td>
      <td colSpan="2">40 MPH</td>
    </tr>
    <tr>
      <td>Suspension</td>
      <td colSpan="2">Spring Arm, Front/Rear</td>
    </tr>
    <tr>
      <td>Frame</td>
      <td colSpan="2">T6061 Aviation Grade Aluminum</td>
    </tr>
    <tr>
      <td>Tires</td>
      <td colSpan="2">10.0" x 2.25" Air-Filled</td>
    </tr>
    <tr>
      <td>Climbing Angle</td>
      <td colSpan="2">40 degrees</td>
    </tr>
    <tr>
      <td>Charging Time</td>
      <td>Up to 8.5h</td>
      <td>Up to 12h</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>63 lbs</td>
      <td>67 lbs</td>
    </tr>
    <tr>
      <td>Colors</td>
      <td colSpan="2">Black | Red | Blue</td>
    </tr>
    </tbody>
  </table>
  )
}

export default MantisSpec;