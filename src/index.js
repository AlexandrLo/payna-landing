import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";

import App from "./App";
import { customLocalStorageManager } from "utils/customLocalStorageManager";

ReactDOM.render(
	<React.StrictMode>
			<BrowserRouter basename="/payna-landing">
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
    <ChakraProvider theme={theme} colorModeManager={customLocalStorageManager}>
);
