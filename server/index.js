const express = require("express");
const cors = require("cors");
const port = 4000;
const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req,res) => {
  const fortunes = [
    "You are very expressive and positive in words, act and feeling.",
    "You will find great contentment in the daily, routine activities.",
    "You will become a great philanthropist in your later years.",
    "Your mentality is alert, practical, and analytical.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
});

app.get("/api/car", (req,res) => {
  const car = ["Jeep", "Dodge", "BMW", "FERRARI", "MERCEDES", ];

  let randomIndex = Math.floor(Math.random() * car.length);
  let randomCar = car[randomIndex];

  res.status(200).send(randomCar);
});

app.get("/api/location", (req,res) => {
  const location = [ "San Diego", "New York", "Hawaii", "Mexico City", "China", ];
 
  let randomIndex = Math.floor(Math.random() * location.length);
  let randomLocations = location[randomIndex];

  res.status(200).send(randomLocations);
});

app.get("/api/food", (req,res) => {
  const food = [ "Pasta", "Steak", "Pizza", "Chicken", "Pork", ];
  
  let randomIndex = Math.floor(Math.random() * food.length);
  let randomFood = food[randomIndex];

  res.status(200).send(randomFood);
});

app.listen(port, () => console.log(`running on ${port}`));

