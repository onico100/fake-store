import React, { useEffect, useState } from "react";
import { getItems } from "../../service";
import styles from "./ItemContiner.module.css";
const ItemContiner = ({ itemsName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getItems(itemsName.toLowerCase())
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [itemsName]);

  return (
    <div>
      <h2 className={styles.headLine}>{itemsName}</h2>
      <div className={styles.container}>
        {data.map((item) => (
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

export default ItemContiner;
