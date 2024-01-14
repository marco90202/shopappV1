import React from "react";
import ReactDom from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";

ReactDom.render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>,
  document.getElementById("root")
);
