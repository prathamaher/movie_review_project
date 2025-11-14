import { Outlet, useLocation } from "react-router-dom";

import "./Root.css";
import NavBar from "../../components/NavBar/NavBar";

const Root = () => {
  return (
    <div className="layout-container">
      <div className="layout-top">{<NavBar />}</div>
      <div className="layout-bottom">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
