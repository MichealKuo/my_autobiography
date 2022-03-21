import React from "react";
import "../Style/CollectionPage.css";
import CollectionCardForPage from "../components/CollectionCardForPage";

function Collection() {
  return (
    <div className="CollectionPart">
      <section>
        <CollectionCardForPage />
      </section>
    </div>
  );
}

export default Collection;
