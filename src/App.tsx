import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const fetchData = () => {
  return axios
    .get("https://api.quotable.io/random")
    .then((res) => {
      const { results } = res.data;
      // console.log(results);
      return results;
    })
    .catch((err) => {
      console.error(err);
    });
};

export default function App() {
  const url = "https://api.quotable.io/random";
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Quotes</h1>
      <h2>{quote.content}</h2>
      <span>{quote.author}</span>
    </div>
  );
}
