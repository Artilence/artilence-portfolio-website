import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = [
  {
    path: "*",
    element: <App />,
  },
];

export const router = createBrowserRouter(routes);
