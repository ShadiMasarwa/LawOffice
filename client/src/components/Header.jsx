import React from "react";
import logo from "../images/scale.png";

const Header = () => {
  return (
    <header className="d-flex flex-row justify-content-between align-items-center gap-2 bg-light">
      <section className="d-flex flex-row  align-items-center gap-2">
        <img src={logo} alt="logo" style={{ width: "20px" }} className="ms-2" />
        <h5 className="my-1 p-1 fw-bold text-primary d-none d-md-block">
          משפט נט - ניהול משרד עורך דין
        </h5>
      </section>
      <section className="fw-bold">משרד עו"ד מצארוה שאדי</section>
      <section className="fw-bold">
        מחובר:<span className="text-success"> עו"ד מצארוה שאדי</span>
      </section>
    </header>
  );
};

export default Header;
