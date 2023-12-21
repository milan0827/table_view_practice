import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./components/Form";
import InvalidRouteError from "./pages/InvalidRouteError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <InvalidRouteError />,
  },
  {
    path: "form",
    element: <Form />,
    children: [
      {
        index: true,
        element: <Form />,
      },
      {
        path: "edit/:slug",
        element: <Form />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
