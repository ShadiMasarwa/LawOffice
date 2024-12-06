import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Home from "../Pages.jsx/Home";
import Customers from "../Pages.jsx/Customers";
import Files from "../Pages.jsx/Files";
import Manage from "../Pages.jsx/Manage";
import AddPerson from "../Pages.jsx/AddPerson";
import Calendar from "../Pages.jsx/Calendar";
import "./SidebarStyle.css";

const Sidebar = () => {
  const [showPage, setShowPage] = useState(1);
  const [showItems, setShowItems] = useState(false);
  const [fullSidebar, setFullSidebar] = useState(true);

  return (
    <div className="row flex-nowrap mt-1 align-items-center">
      <div
        className={`col-1 ${fullSidebar ? "col-md-2" : ""} px-md-2 px-0`}
        style={{ cursor: "pointer", backgroundColor: "#9b9ba8" }}
      >
        <div
          className="d-flex flex-column justify-content-between align-items-center align-items-md-start px-3 pt-2 position-relative"
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

          <div>
            <div className="d-grid gap-2 pt-3">
              <button
                type="button"
                onClick={() => setShowPage(1)}
                className={
                  showPage === 1 ? "btn sidebar_btn active" : "btn sidebar_btn"
                }
              >
                <i>
                  <i className="bi bi-house-door fs-5"></i>
                  <span
                    className={`ps-2 ${
                      fullSidebar ? "d-none d-md-inline" : "d-none"
                    }`}
                  >
                    בית
                  </span>
                </i>
              </button>
              <div className="dropdown">
                <button
                  className={`btn ${
                    showPage === 2 || showPage === 3
                      ? "btn sidebar_btn active"
                      : "btn sidebar_btn"
                  } dropdown-toggle`}
                  type="button"
                  onClick={() => {
                    setShowItems(!showItems);
                  }}
                >
                  <i>
                    <i className="bi bi-people fs-5"></i>
                    <span
                      className={`ps-2 ${
                        fullSidebar ? "d-none d-md-inline" : "d-none"
                      }`}
                    >
                      אנשים
                    </span>
                  </i>
                </button>
                {showItems && (
                  <ul className="dropdown-menu show">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => {
                          setShowItems(false);
                          setShowPage(2);
                        }}
                      >
                        הצג אנשים
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => {
                          setShowItems(false);
                          setShowPage(3);
                        }}
                      >
                        הוספת אנשים
                      </a>
                    </li>
                  </ul>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowPage(4)}
                className={
                  showPage === 4 ? "btn sidebar_btn active" : "btn sidebar_btn"
                }
                style={{ textAlign: "right" }}
              >
                <i>
                  <i className="bi bi-folder2-open fs-5"></i>
                  <span
                    className={`ps-2 ${
                      fullSidebar ? "d-none d-md-inline" : "d-none"
                    }`}
                  >
                    תיקים
                  </span>
                </i>
              </button>
              <button
                type="button"
                onClick={() => setShowPage(6)}
                className={
                  showPage === 6 ? "btn sidebar_btn active" : "btn sidebar_btn"
                }
                style={{ textAlign: "right" }}
              >
                <i>
                  <i className="bi bi-calendar3 fs-5"></i>
                  <span
                    className={`ps-2 ${
                      fullSidebar ? "d-none d-md-inline" : "d-none"
                    }`}
                  >
                    יומן
                  </span>
                </i>
              </button>
              <button
                type="button"
                onClick={() => setShowPage(5)}
                className={
                  showPage === 5 ? "btn sidebar_btn active" : "btn sidebar_btn"
                }
                style={{ textAlign: "right" }}
              >
                <i>
                  <i className="bi bi-speedometer2 fs-5"></i>
                  <span
                    className={`ps-2 ${
                      fullSidebar ? "d-none d-md-inline" : "d-none"
                    }`}
                  >
                    ניהול
                  </span>
                </i>
              </button>
            </div>
          </div>
          <div className="w-100">
            <hr className="dropdown-divider" />
            <div className="dropdown pb-4">
              <a
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-md-inline mx-1">loser</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
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
          2: <Customers />,
          3: <AddPerson />,
          4: <Files />,
          5: <Manage />,
          6: <Calendar />,
        }[showPage] || <Home />}
      </div>
    </div>
  );
};

export default Sidebar;
