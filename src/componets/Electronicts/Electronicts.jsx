import React, { useEffect, useState } from "react";
import { fetchElectronicsData } from "../../service";
import styles from "./Electronicts.module.css";

const Electronicts = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetchElectronicsData().then((data) => setElectronics(data));
  }, []);

  return (
    <div>
      <h2>Electronics</h2>
      <div className={styles.container}>
        {electronics.map((item) => (
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

export default Electronicts;
