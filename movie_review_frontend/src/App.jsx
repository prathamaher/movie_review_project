import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Movies from "./pages/Movies/Movies";
import Reviews from "./pages/Reviews/Reviews";
import UserReviews from "./pages/UserReviews/UserReviews";
import EditProfile from "./pages/EditProfie/EditProfile";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import CreateReview from "./pages/CreateReview/CreateReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      // LOGIN PAGE
      {
        index: true, // same as path: ""
        element: <Login />,
      },
      {
        path: "login", // shows at "/login"
        element: <Login />,
      },

      // HOME (PROTECTED)
      {
        path: "home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },

      // REGISTER
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "reviews/:id",
        element: <UserReviews />,
      },
      {
        path: "shared-reviews",
        element: <div>shared reviews</div>,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "create-review/:movieTitle",
        element: <CreateReview />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
