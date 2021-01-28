import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ProductsProvider } from "./contexts/products_context";
import App from "./App";

ReactDOM.render(
	<ProductsProvider>
		<App />
	</ProductsProvider>,
	document.getElementById("root")
);
