import React from "react";
import { render } from "react-dom";
import ItemApp from "./items/ItemApp";

render(<ItemApp user={window.USER} />, document.getElementById("website-app"));
