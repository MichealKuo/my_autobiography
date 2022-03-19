import React from "react";
import "../Style/CollectionPage.css";
import CollectionCardForPage from "../components/CollectionCardForPage";
import Navbar from "./Navbar";

function Collection() {
  return (
    <div className="CollectionPart">
      <Navbar />
      <section>
        <CollectionCardForPage />
      </section>
    </div>
  );
}

export default Collection;
