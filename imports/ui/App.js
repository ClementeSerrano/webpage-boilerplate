import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faMobileAlt, faDove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YourWebsiteLogo from "./assets/your-website-logo_white.png";

library.add(faEdit, faMobileAlt, faDove);

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

const App = () => (
  <div className="App">
    <Navbar backgroundcolor="black" logo={YourWebsiteLogo} />
    <Homepage />
  </div>
);

export default App;
