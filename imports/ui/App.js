import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faMobileAlt, faDove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEdit, faMobileAlt, faDove);

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

const App = () => (
  <div className="App">
    <Navbar />
    <Homepage />
  </div>
);

export default App;
