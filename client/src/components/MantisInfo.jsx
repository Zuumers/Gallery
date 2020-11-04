import React from 'react';
import styles from '../MantisInfo.css';

function MantisInfo ({price}) {

  return(

    <div className={styles.Mantis}>
      <div className={styles.Title}>
      THE MANTIS-40mph Ultimate Performance Scooter
      </div>
      <div className={styles.Price}>
       {/* {price}  */}
       SOLD OUT
      </div>
      <label for="model"> Model: </label>
      <select className={styles.dropMenu} id="model" >
        <option value="17.5AH">17.5AH</option>
        <option value="24.5AH">24.5AH</option>
      </select>
      <label for="color"> Color: </label>
      <select className={styles.dropMenu} id="color" >
        <option value="Black, Red Accents">Black, Red Accents</option>
        <option value="Red Factory Anodized Components(+100)">Red Factory Anodized Components(+100)</option>
        <option value="Black Factory Anodized Components(+100)">Black Factory Anodized Components(+100)</option>
        <option value="Blue Factory Anodized Components(+100)">Blue Factory Anodized Components(+100)</option>
      </select>
      <button>SOLD</button>
      <div>
      FREE US SHIPPING. SHIPS WITHIN 15 DAYS OF ORDERING. LIMITED QUANTITIES. ORDER NOW FOR EARLIEST DELIVERY. WE DO NOT SHIP TO HAWAII
      </div>
      <div>
      The MANTIS is the ultimate performance scooter with incredible handling, power, and a 40mph top speed. Yet it weighs 15lbs less than comparable scooters in its class thanks to its hi-tech materials, forged aluminum chassis, and sleek design.
      </div>
      <div>

      </div>
      <br></br>
      <div>
      Partial vs Fully Hydraulic brakes:

      Partial Hydraulic brakes - combine a metal cable with a hydraulic caliper.
      Full Hydraulic brakes - full hydraulic actuation from handle to the caliper.
      Smart LCD Display vs Minimotors EY3:

      Smart LCD Display - Advanced LCD and controller. Set max speed, acceleration, electronic braking, kick-off vs no kick-off, cruise control, and more.
      Mini-motors EY3 - Professional grade display, throttle, and controller components. Improved day and night readability, battery percentage readout, advanced custom settings.
      Color variants:

      Black - black with red accents: brakes, springs, platform cover.
      Red - black with red neck and tail, red lower suspension arms.
      Blue - black with blue suspension upper and lower arms.


      *Due to high demand total delivery time for Mantis is 25 days,*
      </div>
    </div>
  )
}

export default MantisInfo;