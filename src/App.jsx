import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddNewForm from "./components/Form/AddNewForm";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "form",
    element: <AddNewForm />,
    children: [
      {
        index: true,
        element: <AddNewForm />,
      },
      {
        path: "edit/:slug",
        element: <AddNewForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
