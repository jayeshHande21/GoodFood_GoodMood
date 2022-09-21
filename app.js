import { useState } from "react";
import "./styles.css";
var foodDatabase = {
  Spanish: [
    {
      name: "Paella",
      ingredients: "Round Rice , Olive oil , Chiken and Sauces.",
    },
    {
      name: "Tortilla Espanola",
      ingredients: "Onions,eggs,potatoes and olive oil",
    },

    {
      name: "Gazpacho",
      ingredients: "Tomatoes , peppers,cucumbers , garlic and herbs",
    },

    {
      name: "Pisto",
      ingredients: "Zocchini , garlic sliced,olive oil,tomatoes",
    },
  ],

  Arebic: [
    {
      name: "Luqaimat",
      ingredients: "Honey , seeds , flour ,dry yeast and cardamom",
    },
    {
      name: "Balaleat",
      ingredients: "Sugar,rose water,cardamom,thin eggs , potatoes",
    },
    {
      name: "Nicolse Salad",
      ingredients:
        "Potatoes , onions,hard-boiled eggs,black olives and anchovies",
    },
  ],

  African: [
    {
      name: "African Chiken(macanese one-pan)",
      ingredients: "Oyster sauce , curry powder , coconut milk ,peanut butter",
    },
    {
      name: "Shakshuka",
      ingredients: "Pasta sauce,eggs,crusty bread",
    },
    {
      name: "Easydukkah",
      ingredients:
        "Nuts,almonds,sesame seeds,coriander,cumin , salt and papper",
    },
  ],
};
var cuisines = Object.keys(foodDatabase);

export default function App() {
  var [cuisine, setCuisine] = useState("Spanish");

  function onClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1>
        <strong>Good Food- Good Mood!</strong>
      </h1>
      <div>
        Famous dishes of the top cuisines in the world are mentioned below.
        Hurry Up!.
      </div>
      {cuisines.map(function (cuisine) {
        return (
          <button
            style={{
              padding: "1% 2%",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "inline-block",
              border: "none",
              margin: "10px",
              backgroundColor: "olive",

              boxShadow: "0 2px 10px rgba(44, 40, 14, 0.15)",
            }}
            onClick={() => onClickHandler(cuisine)}
          >
            {cuisine}
          </button>
        );
      })}
      <hr></hr>
      <div style={{ textAlign: "center", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {foodDatabase[cuisine].map((nameOfCuisine) => (
            <li
              key={nameOfCuisine.name}
              style={{
                listStyle: "none",
                border: "0.5px #f3f3f3 solid",
                padding: "1rem",
                width: "100%",
                backgroundColor: "skyblue",
                margin: "1rem 40%",
                // boxShadow: "0 2px 10px rgba(44, 40, 14, 0.15)"
              }}
            >
              <div>{nameOfCuisine.name}</div>
              <hr></hr>
              <div style={{ fontSize: "0.7rem" }}>
                Ingredients : {nameOfCuisine.ingredients}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
