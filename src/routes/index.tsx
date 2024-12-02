import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "@/pages/HomePage/HomePage";

const routes = [
  {
    path: "/:id?",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
];

export const router = createBrowserRouter(routes);
