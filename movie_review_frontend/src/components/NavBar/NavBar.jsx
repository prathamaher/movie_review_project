import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { Fragment } from "react";
import { useAuth } from "../../context/AuthContext";

function NavBar() {
  const location = useLocation();
  const { logout } = useAuth();

  const hideNavBarPaths = ["/", "/login", "/register"];

  const shouldHideNavBarComponents = hideNavBarPaths.includes(
    location.pathname
  );

  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Movie Reviews
          </Link>
          {!shouldHideNavBarComponents && (
            <Fragment>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="movies">
                      All Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      My Reviews
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Shared With Me
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="reviews">
                      All Reviews
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="d-flex justify-content-center align-items-center"
                role="search"
              >
                <div>
                  <Link className="nav-link pe-3" to="edit-profile">
                    Edit Profile
                  </Link>
                </div>
                <div>
                  <Link className="nav-link pe-3" to="change-password">
                    Change Password
                  </Link>
                </div>
                <button
                  onClick={logout}
                  className="btn btn-outline-success me-4"
                  type="submit"
                >
                  Logout
                </button>
              </div>
            </Fragment>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
