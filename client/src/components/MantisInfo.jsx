import React, { useState , useEffect} from 'react';
import styles from '../MantisInfo.css';
import MantisSpec from './MantisSpec.jsx';


function MantisInfo ({price, handleSubmit, isAvailable}) {
  const [model, setModel] = useState('0');
  const [color, setColor] = useState('0');
  const [shipping, setShipping] = useState('Free Standard Shipping');
  const info = {models:model, colors: color, shipMethod: shipping};

  // function handleChange (info) {
  //   console.log(info)
  // }
  let available = <div></div>
  const soldout = <button className={styles.button} onClick={()=>handleSubmit(info)}>SOLD</button>;
  const checkout = <div className={styles.shipping}><label for="Shipping"> Shipping </label><br></br>
    <select className={styles.dropMenu2} id="shipping" value={shipping} onChange={(e) => {setShipping(e.target.value)}}>
      <option value="Free Standard Shipping">Free Standard Shipping</option>
      <option value="Expedited Shipping">Expedited Shipping</option>
    </select> <button className={styles.buttonCheckout} onClick={()=>handleSubmit(info)}>Checkout</button></div>;
  // isAvailable? available = checkout : available = soldout;


    if (isAvailable) {
      console.log(isAvailable)
      available = checkout;
    } else {
      console.log('this is else', isAvailable)
      available = soldout;
    }


  return(

    <div className={styles.Mantis}>
      <div className={styles.Title}>
        THE MANTIS-40mph Ultimate Performance Scooter
      </div>
      <div className={styles.Price}>
       {/* {price}  */}
        SOLD OUT
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.model}>
          <label for="model"> Model </label>
          <div>
          <select className={styles.dropMenu} id="model" value={model} onChange={(e) => {setModel(e.target.value)}}>
            <option value="17.5AH">17.5AH</option>
            <option value="24.5AH">24.5AH</option>
          </select>
          </div>
        </div>
        <br></br>
        <div className={styles.color}>
          <label for="color"> Color </label>
          <div>
          <select className={styles.dropMenu} id="color" value={color} onChange={(e) => {setColor(e.target.value)}}>
            <option value="Black, Red Accents">Black, Red Accents</option>
            <option value="Red Factory Anodized Components(+100)">Red Factory Anodized Components(+100)</option>
            <option value="Black Factory Anodized Components(+100)">Black Factory Anodized Components(+100)</option>
            <option value="Blue Factory Anodized Components(+100)">Blue Factory Anodized Components(+100)</option>
          </select>
          </div>
        </div>
      </div>
        {available}
      <div className={styles.info1}>
        FREE US SHIPPING. SHIPS WITHIN 15 DAYS OF ORDERING. LIMITED QUANTITIES. ORDER NOW FOR EARLIEST DELIVERY. WE DO NOT SHIP TO HAWAII
      </div>
      <div className={styles.info2}>
        The MANTIS is the ultimate performance scooter with incredible handling, power, and a 40mph top speed. Yet it weighs 15lbs less than comparable scooters in its class thanks to its hi-tech materials, forged aluminum chassis, and sleek design.
      </div>
      <div>
        <div className={styles.heading1}>There are 2 configurations for the Mantis:</div>
        <div className={styles.ChartContainer}>
          <MantisSpec/>
        </div>
      </div>
      <br></br>
      <div className={styles.info3}>
        <div>
          <div className={styles.heading1}>Partial vs Fully Hydraulic brakes:</div>
          <br></br>
          <li>Partial Hydraulic brakes - combine a metal cable with a hydraulic caliper.</li>
          <br></br>
          <li>Full Hydraulic brakes - full hydraulic actuation from handle to the caliper.</li>
        </div>
        <br></br>
        <div>
        <div className={styles.heading1}>Smart LCD Display vs Minimotors EY3:</div>
          <br></br>
          <li>Smart LCD Display - Advanced LCD and controller. Set max speed, acceleration, electronic braking, kick-off vs no kick-off, cruise control, and more.</li>
          <br></br>
          <li>Mini-motors EY3 - Professional grade display, throttle, and controller components. Improved day and night readability, battery percentage readout, advanced custom settings.</li>
        </div>
          <br></br>
        <div>
        <div className={styles.heading1}>Color Variants:</div>
          <br></br>
          <li>Black - black with red accents: brakes, springs, platform cover.</li><br></br>
          <li>Red - black with red neck and tail, red lower suspension arms.</li><br></br>
          <li>Blue - black with blue suspension upper and lower arms.</li><br></br>
        </div>
        <br></br>
      *Due to high demand total delivery time for Mantis is 25 days,*
      </div>
    </div>
  )
}

export default MantisInfo;