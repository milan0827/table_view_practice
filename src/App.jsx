import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InvalidRouteError from "./pages/InvalidRouteError";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import AppLayout from "./pages/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <InvalidRouteError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
