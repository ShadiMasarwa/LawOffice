import logo from "../images/scale.png";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";

const Header = () => {
  const { office } = useContext(GlobalContext);

  return (
    <header className="row p-2" style={{ backgroundColor: "#9b9ba8" }}>
      <div
        id="id"
        className="col-md-4 d-flex flex-row justify-content-center justify-content-md-start align-items-center gap-2"
      >
        <img src={logo} alt="logo" style={{ width: "20px" }} className="ms-2" />
        <h5 className="my-1 p-1 fw-bold text-primary  d-md-block">
          משפט נט - ניהול משרד עורך דין
        </h5>
      </div>
      <div
        id="office_name"
        className="col-md-4 text-white d-flex align-items-center justify-content-center fw-bold"
      >
        {office.name}
      </div>
      <div
        id="Messages"
        className="col-md-4 d-flex gap-4 justify-content-center justify-content-md-end text-white align-items-center"
      >
        <i className="bi bi-person"></i>
        <i className="bi bi-calendar3"></i>
        <i className="bi bi-envelope"></i>
        <i className="bi bi-envelope"></i>
      </div>
    </header>
  );
};

export default Header;
