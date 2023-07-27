import React from "react";
import ReactDOM from "react-dom/client";
import { ToDo } from "./ToDo";

import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ToDo />
    </ChakraProvider>
  </React.StrictMode>
);
