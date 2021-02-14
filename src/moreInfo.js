import React, { useState, useEffect } from "react";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const page = match.params.id;
    const response = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${page}`
    );
    const item = await response.json();
    await setItem(item);
    console.log(item);
    const nameData = document.querySelector(".nameData");
    nameData.innerText = item.data.item.name;
    const imageData = document.querySelector(".imageData");
    imageData.setAttribute("src", item.data.item.images.icon);
  };

  return (
    <div>
      <h1 className="nameData"></h1>
      <img className="imageData" src="" alt="fortniteImages" />
    </div>
  );
}

export default Item;
