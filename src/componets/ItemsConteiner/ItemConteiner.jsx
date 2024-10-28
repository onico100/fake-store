import React from "react";
import { getItems } from "../../service";
import styles from "./ItemContiner.module.css";
import { useQuery } from "react-query";

const ItemContainer = ({ itemsName }) => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery(
    [itemsName.toLowerCase()],
    () => getItems(itemsName.toLowerCase()).then((res) => res.json()),
    {
      staleTime: 60000,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading items</div>;

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

export default ItemContainer;
