import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import GlobalContext from "../../Hooks/GlobalContext";
import { useContext } from "react";
import "./SidebarStyle.css";
import Tooltip from "../Tooltip";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);
  const { showPage, setShowPage, fullSidebar } = useContext(GlobalContext);

  if (!item.childrens) {
    return (
      <div className="d-grid w-100">
        <button
          type="button"
          onClick={() => setShowPage(item.page)}
          className={`btn sidebar_btn ${
            showPage === item.page ? "active" : ""
          }`}
        >
          <i>
            <Tooltip text={item.title}>
              <i className={`${item.icon} fs-5 ps-0`}></i>
            </Tooltip>
            <span
              className={`ps-2 d-none ${fullSidebar && "d-md-inline"} ${
                showPage === item.page && "fw-bold"
              }`}
            >
              {item.title}
            </span>
          </i>
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="d-grid w-100">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`btn sidebar_btn ${showPage === item.page && "active"}`}
          >
            <i className="d-flex justify-content-between">
              <span>
                <Tooltip text={item.title}>
                  <i className={`${item.icon} fs-5 ps-0`}></i>
                </Tooltip>
                <span
                  className={`ps-2 d-none ${fullSidebar && "d-md-inline"} `}
                >
                  {item.title}
                </span>
              </span>
              <i
                className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"}`}
              ></i>
            </i>
          </button>
        </div>
        <div
          className={`sidebar-submenu ${open ? "open" : "closed"}`}
          style={{ marginLeft: fullSidebar ? "1.5rem" : "0" }}
        >
          {item.childrens.map((child) => (
            <SidebarItem key={child.page} item={child} />
          ))}
        </div>
      </>
    );
  }
}
