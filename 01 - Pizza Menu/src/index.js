import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main />
      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <img src="pizzas/margherita.jpg" alt="Pizza Margherita" />
      <h3>Pizza Margherita</h3>
      <p>Ingredients</p>
    </div>
  );
}

function Header() {
  const styleObj = {
    // color: "red",
    // fontSize: "40px",
  };

  return (
    <header className="header">
      <h1 style={styleObj}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza></Pizza>
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  const openHour = 8;
  const closeHour = 22;
  const currHour = new Date().getHours();

  const isOpen = currHour <= closeHour && currHour >= openHour ? true : false;

  return (
    <footer className="footer">
      We are currently {isOpen ? "open" : "close"}
    </footer>
  );

  // return React.createElement(
  //   "footer",
  //   null,
  //   `We are currently open ${new Date().toLocaleTimeString()}`
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
