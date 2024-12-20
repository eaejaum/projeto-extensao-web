import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Error404 from "./Routes/Error404";
import ProductDetails from "./Routes/ProductDetails";
import Estoque from "./Routes/Estoque";
import { HandleSearchContextProvider } from "./context/HandleSearchContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "productDetails/:CODIGO_ITEM",
        element: <ProductDetails />,
      },
      {
        path: "estoque",
        element: <Estoque />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HandleSearchContextProvider>
      <RouterProvider router={router} />
    </HandleSearchContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
