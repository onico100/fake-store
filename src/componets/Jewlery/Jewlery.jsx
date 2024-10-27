import React, { useEffect, useState } from "react";
import { fetchJewelryData } from "../../service";
import styles from "./Jewlery.module.css";
const Jewlery = () => {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetchJewelryData().then((data) => setJewelry(data));
  }, []);

  return (
    <div className={styles.product}>
      <h2>Jewelry</h2>
      <div className={styles.container}>
        {jewelry.map((item) => (
          <div className={styles.item} key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className={styles.itemContent}>
              <h3>{item.title}</h3>
              <div className={styles.price}>${item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jewlery;
