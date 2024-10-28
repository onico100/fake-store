import React, { useEffect, useState } from "react";
import { getElectronics } from "../../service";
import styles from "./Electronicts.module.css";

const Electronicts = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    getElectronics()
      .then((res) => res.json())
      .then((data) => {
        setElectronics(data);
      });
  }, []);
  return (
    <div>
      <h2 className={styles.headLine}>Electronics</h2>
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
