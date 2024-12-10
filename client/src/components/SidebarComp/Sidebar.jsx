import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useContext } from "react";
import Home from "../../Pages/Home";
import Customers from "../../Pages/Customers";
import Files from "../../Pages/Files";
import Manage from "../../Pages/Manage";
import AddPerson from "../../Pages/AddPerson";
import Calendar from "../../Pages/Calendar";
import "./SidebarStyle.css";
import GlobalContext from "../../Hooks/GlobalContext";
import menuItems from "./menuInfo.json";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [showItems, setShowItems] = useState(false);
  const { user, showPage, fullSidebar, setFullSidebar } =
    useContext(GlobalContext);

  return (
    <div className="row flex-nowrap mt-1 ">
      <div
        className={`col-1 ${fullSidebar ? "col-md-2" : ""} px-md-2 px-0`}
        style={{ cursor: "pointer", backgroundColor: "#9b9ba8" }}
      >
        <div
          className="d-flex flex-column gap-3 w-100 align-items-center align-items-md-start pt-5 position-relative"
          style={{ minHeight: "90vh" }}
        >
          <span
            className="position-absolute top-0 end-0 p-1 d-none d-md-inline"
            onClick={() => setFullSidebar(!fullSidebar)}
          >
            {fullSidebar ? (
              <i className="bi bi-caret-right-square-fill"></i>
            ) : (
              <i className="bi bi-caret-left-square-fill"></i>
            )}
          </span>
          {menuItems.map((item) => (
            <SidebarItem item={item} key={item.page} />
          ))}

          <div className="w-100 mt-auto">
            <hr className="dropdown-divider" />
            <div className="dropdown pb-2">
              <a
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle ms-1"
                />
                <span className="d-none d-md-inline mx-1">{user.name}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    התנתק/י
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col py-3">
        {{
          1: <Home />,
          // 2: <Customers />,
          3: <Customers />,
          4: <AddPerson />,
          5: <Files />,
          6: <Calendar />,
          7: <Manage />,
        }[showPage] || null}
      </div>
    </div>
  );
};

export default Sidebar;
