import "./App.css";
import { useState } from "react";
import AnimalShown from "./AnimalShown";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "dog", "cow", "horse", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShown type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animals</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};
export default App;
