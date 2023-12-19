import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = [
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/success',
    element: (<>Success!</>),
  },
  {
  path: "*",
  element: (<>404 Not Found</>)
  }
]

export const router = createBrowserRouter(routes)