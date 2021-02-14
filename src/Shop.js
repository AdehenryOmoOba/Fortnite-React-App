import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [dataArray, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await response.json();
    const dataArray = items.data;
    setItems(dataArray);
  };

  return (
    <div>
      {dataArray.map((item) => (
        <h2 key={item.itemId}>
          <Link to={`shop/${item.itemId}`}>{item.item.name}</Link>
        </h2>
      ))}
    </div>
  );
}

export default Shop;
