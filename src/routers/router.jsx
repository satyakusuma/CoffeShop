import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home"
import MenuPage from "../menu/MenuPage";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/> ,
        },
        {
          path: "/menu",
          element: <MenuPage/> ,
        },
        {
          path:"/login",
          element:<Login/>
        },
      ],
    },
  ]);

  export default router;