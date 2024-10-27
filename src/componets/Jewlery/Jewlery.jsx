import React, { useEffect, useState } from "react";
import { fetchJewelryData } from "../../service";

const Jewlery = () => {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetchJewelryData().then((data) => setJewelry(data));
  }, []);

  return (
    <div>
      <h2>Jewelry</h2>
      <ul>
        {jewelry.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <img src={item.image}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jewlery;
