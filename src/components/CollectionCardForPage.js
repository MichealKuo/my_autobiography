import React from "react";
import Card from "../components/CardForPage";
import { Collection } from "../Collection/collection";
import "../Style/CollectCardForPage.css";
function CollectionCardForPage() {
  return (
    <div className="CollectionCardPage">
      <div className="CollectPageText">
        <h1>Collection</h1>
      </div>
      <div className="CollectionCards">
        {Collection.map((item) => (
          <Card
            key={item.id}
            img={item.url}
            title={item.title}
            describe={item.describe}
            link={item.link}
            skill={item.skill}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionCardForPage;