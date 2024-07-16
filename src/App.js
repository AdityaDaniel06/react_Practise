import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Pizza />

      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      {" "}
      <Menu />
    </div>
  );
}
function Header() {
  return <h2>Fast React Pizza Co.</h2>;
}
function Menu() {
  const style = { color: "red", fontSize: "40px" };
  return (
    <div>
      <h3 style={style}>Our Pizza Menu</h3>
      <ul>
        <li>Margherita</li>
        <li>Pepperoni</li>
        <li>Hawaiian</li>
        <li>Veggie</li>
      </ul>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpenHour = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are currently open!!");
  // } else {
  //   alert("We are currently closed!!");
  // }
  // return React.createElement("footer", null, "We are currently OPEN!!!"); under the hood this is happening
  return (
    <footer>
      {new Date().toLocaleTimeString()}
      <p>We are currently OPEN!!!</p>
    </footer>
  );
}
export default App;
