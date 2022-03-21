import React from "react";
import "../Style/CollectCard.css";
import { Collection } from "../Collection/collection";
import Card from "../components/Card";
function CollectCard() {
  return (
    <div className="Collection">
      <div className="CollectText">
        <h1>Collection</h1>
      </div>
      <div className="CollectionCard">
        {Collection.map((item) => (
          <Card
            key={item.id}
            img={item.url}
            title={item.title}
            describe={item.describe}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectCard;