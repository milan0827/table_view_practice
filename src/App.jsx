import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "./components/Container";
import Error from "./components/Error";
import Edit from "./pages/Edit";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Container />,
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
