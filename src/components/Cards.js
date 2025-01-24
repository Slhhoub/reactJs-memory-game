import { useState, useEffect } from "react";
import Card from "./Card";

function Cards({ mode, saveHistory }) {
  const [items, setItems] = useState([]);
  const [prev, setPrev] = useState(-1);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    initializeGame();
  }, [mode]);

  function initializeGame() {
    const cardImages = [
      { id: 1, img: "/img/html.png" },
      { id: 2, img: "/img/css.png" },
      { id: 3, img: "/img/js.png" },
      { id: 4, img: "/img/scss.png" },
      { id: 5, img: "/img/react.png" },
      { id: 6, img: "/img/vue.png" },
      { id: 7, img: "/img/angular.png" },
      { id: 8, img: "/img/nodejs.png" },
      { id: 9, img: "/img/java.webp" },
      { id: 10, img: "/img/python.webp" },
      { id: 11, img: "/img/sql.webp" },
      { id: 12, img: "/img/ts.png" },
      { id: 13, img: "/img/spring.png" },
      { id: 14, img: "/img/hibrante.jpg" },
      { id: 15, img: "/img/github.png" },
      { id: 16, img: "/img/docker.png" }
    ];
    const selectedCards = cardImages.slice(0, mode / 2);
    const shuffledCards = [...selectedCards, ...selectedCards].sort(
      () => Math.random() - 0.5
    );
    setItems(shuffledCards.map((card) => ({ ...card, stat: "" })));
    setPrev(-1);
    setStartTime(Date.now());
  }

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
      if (items.every((item) => item.stat === "correct")) {
        const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
        saveHistory({
          mode,
          time: timeElapsed,
          date: Date.now(),
        });
      }
    }
  }

  return (
    <div className="card-container mt-5">
      <div className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
