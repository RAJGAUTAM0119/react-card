import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App
      name="Raj Gautam"
      email="xyz@gmail.com"
      img="../assets/profile-pic4.png"
    />
    <App
      name="Rajat Arora"
      email="qwerty@gmail.com"
      img="../assets/profile-pic2.png"
    />
    <App name="Nany" email="type@gmail.com" img="../assets/profile-pic1.jpeg" />
    <App
      name="Alex Joe"
      email="computer@gmail.com"
      img="../assets/profile-pic3.png"
    />
    <App
      name="Jane Doe"
      email="asset@gmail.com"
      img="../assets/profile-pic5.png"
    />
  </>
);

reportWebVitals();
