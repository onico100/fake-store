import React, { useEffect, useState } from "react";
import { fetchElectronicsData } from "../../service";

const Electronicts = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetchElectronicsData().then((data) => setElectronics(data));
  }, []);

  return (
    <div>
      <h2>Electronics</h2>
      <ul>
        {electronics.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Electronicts;
