import { useEffect, useState } from "react";
import axios from "axios";

function Theme() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState(0);

  function refresh() {
    axios.get("https://api.quotable.io/random?limit=1").then((response) => {
      setAuthor(response.data["author"]);
      setQuote(response.data["content"]);
    });
  }

  function dodo() {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    document.body.style.backgroundColor = `${color}`;
  }

  return (
    <body>
      <div>
        <h2> {quote}</h2>
        <h5>- {author}</h5>
        <button
          onClick={() => {
            dodo();
            refresh();
          }}
        >
          Refresh
        </button>
      </div>
    </body>
  );
}

export default Theme;
