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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
