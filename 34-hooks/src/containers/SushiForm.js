import React, { useEffect, useState } from "react";
import { useForm } from "../hooks";

const SushiForm = ({ submitSushi }) => {
  const [formData, handleSubmit, handleChange] = useForm(submitSushi);
  const [sushis, setSushis] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sushis")
      .then(res => res.json())
      .then(sushis => {
        setSushis(sushis);
      });

    const timout = setTimeout(() => {
      console.log("clear sushis");
      setSushis([]);
    }, 5000);
    return () => {
      console.log("clear timout");
      clearTimeout(timout);
    };
  }, []);

  useEffect(() => {
    console.log("sushis has changed", sushis);
  }, [sushis]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={formData["name"] || ""}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
        value={formData["price"] || ""}
      />
      <input type="submit" value="Create sushi" />
    </form>
  );
};

export default SushiForm;
