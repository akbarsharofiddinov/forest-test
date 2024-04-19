import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home, Menu } from "./pages";
import { ToastContainer } from "react-toastify";
import { ToTopBtn } from "./components";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/menu/:category_id",
          element: <Menu />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
      <ToTopBtn />
    </>
  );
};

export default App;
