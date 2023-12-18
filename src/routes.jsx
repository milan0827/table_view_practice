import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./components/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
