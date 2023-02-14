import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import ErrorPage from "../../layout/shared/ErrorPage/ErrorPage";
import Home from "../../../pages/home/Home/Home";
import Login from "../../../pages/authentication/Login/Login";
import Registration from "../../../pages/authentication/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import UserRole from "../../../pages/UserRole/UserRole";
import CandidateForm from "../../../pages/UserRole/CandidateForm";
import EmployerForm from "../../../pages/UserRole/EmployerForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/registration", element: <Registration></Registration> },
      { path: "/candidate-form", element: <CandidateForm></CandidateForm> },
      { path: "/employer-form", element: <EmployerForm></EmployerForm> },
      {
        path: "/role",
        element: (
          <PrivateRoute>
            <UserRole></UserRole>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
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
