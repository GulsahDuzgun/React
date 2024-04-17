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

function Pizza({ pizzaData }) {
  if (pizzaData.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{+pizzaData.price + 3}</span>
      </div>
    </li>
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
  const pizzas = [...pizzaData];

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas.length > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone over, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaData={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
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
      {isOpen ? (
        <Order closeHourData={closeHour} openHourData={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00 .
        </p>
      )}
    </footer>
  );

  // return React.createElement(
  //   "footer",
  //   null,
  //   `We are currently open ${new Date().toLocaleTimeString()}`
}

function Order({ closeHourData, openHourData }) {
  return (
    <div className="order">
      <p>
        We are open from {openHourData}:00 to {closeHourData}:00. Come visit us
        or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
