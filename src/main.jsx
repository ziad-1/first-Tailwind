import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";

createRoot(document.getElementById("root")).render(
<div className="App">
   <Header/>
   <Hero/>
</div>
);
