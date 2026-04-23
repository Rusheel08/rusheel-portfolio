import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/space.jpg)`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundSize = "cover";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
