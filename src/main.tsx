import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./Contexts/ThemeContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { DetailPage } from "./components/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:isbn",
    element: <DetailPage />,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
