import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import GameDetail from "./pages/GameDetail";
import PageNotFound from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "games/:slug", element: <GameDetail /> },
    ],
  },
]);
