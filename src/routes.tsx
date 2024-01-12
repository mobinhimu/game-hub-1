import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import AppLayout from "./components/AppLayout";
import GameDetail from "./components/pages/GameDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "games/:id", element: <GameDetail /> },
    ],
  },
]);
