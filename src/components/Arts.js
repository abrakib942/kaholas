import React, { useEffect, useState } from "react";
import Art from "./Art";

const Arts = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setArts(data));
  }, []);
  return (
    <div className="lg:px-48 mt-8 px-12">
      {arts.map((art, index) => (
        <Art key={index} art={art}></Art>
      ))}
    </div>
  );
};

export default Arts;
