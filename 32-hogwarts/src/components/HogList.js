import React from "react";
import HogCard from "./HogCard";

const HogList = ({ hogs }) => {
  return (
    <div className="ui cards">
      {hogs.map((hog, i) => (
        <HogCard key={hog.id} hog={hog} {...hog} />
      ))}
    </div>
  );
};

export default HogList;
