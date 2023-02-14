import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import ErrorPage from "../../layout/shared/ErrorPage/ErrorPage";
import Home from "../../../pages/home/Home/Home";
import Login from "../../../pages/authentication/Login/Login";
import Registration from "../../../pages/authentication/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/registration", element: <Registration></Registration> },
      {
        path: "/role",
        element: (
          <PrivateRoute>
            <Dashboard />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
