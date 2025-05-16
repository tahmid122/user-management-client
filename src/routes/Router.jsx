import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import NewUser from "../pages/NewUser";
import Error from "../pages/Error";
import UpdateUser from "../pages/UpdateUser";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:5000/users"),
      },
      { path: "new-user", Component: NewUser },
      {
        path: "update-user/:id",
        Component: UpdateUser,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
