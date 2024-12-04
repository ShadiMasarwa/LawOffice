import "bootstrap-icons/font/bootstrap-icons.css";
import HomeSvg from "../Svgs/HomeSvg";
import ManageSvg from "../Svgs/ManageSvg";
import { useState } from "react";
import CustomersSvg from "../Svgs/CustomersSvg";
import Home from "../Pages.jsx/Home";
import Customers from "../Pages.jsx/Customers";
import Files from "../Pages.jsx/Files";
import FolderSvg from "../Svgs/FolderSvg";
import Manage from "../Pages.jsx/Manage";
import AddCustomer from "../Pages.jsx/AddCustomer";

const Sidebar = () => {
  const [showPage, setShowPage] = useState(1);
  const [showItems, setShowItems] = useState(false);
  const [fullSidebar, setFullSidebar] = useState(true);
  return (
    <div className="row flex-nowrap mt-1">
      <div
        className={`col-1 ${
          fullSidebar ? "col-md-2" : ""
        } px-md-2 px-0 bg-light `}
        style={{ cursor: "pointer" }}
      >
        {/* `" */}
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
            <p className="d-flex justify-content-center py-3 mb-md-0 me-md-auto text-primary text-decoration-none ">
              <span className="fs-5 d-none d-md-inline fw-bold ">תפריט</span>
            </p>
            <div className="d-grid gap-2">
              <button
                type="button"
                onClick={() => setShowPage(1)}
                className={
                  showPage === 1
                    ? "btn btn-primary"
                    : "btn btn-light text-primary"
                }
                style={{ textAlign: "right" }}
              >
                <i>
                  <HomeSvg />
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
                      ? "btn-primary"
                      : "btn-light text-primary"
                  } dropdown-toggle`}
                  type="button"
                  onClick={() => {
                    setShowItems(!showItems);
                  }}
                >
                  <i>
                    <CustomersSvg />
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
                  showPage === 4
                    ? "btn btn-primary"
                    : "btn btn-light text-primary"
                }
                style={{ textAlign: "right" }}
              >
                <i>
                  <FolderSvg />
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
                onClick={() => setShowPage(5)}
                className={
                  showPage === 5
                    ? "btn btn-primary"
                    : "btn btn-light text-primary"
                }
                style={{ textAlign: "right" }}
              >
                <i>
                  <ManageSvg />
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
          3: <AddCustomer />,
          4: <Files />,
          5: <Manage />,
        }[showPage] || <Home />}
      </div>
    </div>
  );
};

export default Sidebar;
