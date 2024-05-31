import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { Home } from "./components/Home";
import { StepsPage } from "./components/stepspage/StepsPage";
import { StepsPageTwo } from "./components/stepspagetwo/StepsPageTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <StepsPage /> },
      { path: "/v2", element: <StepsPageTwo /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  // wrap Contexts around the router, here
  return <RouterProvider router={router} />;
}
