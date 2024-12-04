import React from "react";
import logo from "../images/scale.png";

const Header = () => {
  return (
    // <header className="d-flex flex-row justify-content-between align-items-center gap-2 bg-light">
    //   <section className="d-flex flex-row  align-items-center gap-2">
    //     <img src={logo} alt="logo" style={{ width: "20px" }} className="ms-2" />
    //     <h5 className="my-1 p-1 fw-bold text-primary d-none d-md-block">
    //       משפט נט - ניהול משרד עורך דין
    //     </h5>
    //   </section>
    //   <section></section>
    //   <section className="fw-bold">משרד עו"ד מצארוה שאדי</section>
    //   <section className="fw-bold">
    //     מחובר:<span className="text-success"> עו"ד מצארוה שאדי</span>
    //   </section>
    // </header>
    <header className="row p-2 bg-Tertiary">
      <div
        id="id"
        className="col-md-3 d-flex flex-row  align-items-center gap-2"
      >
        <img src={logo} alt="logo" style={{ width: "20px" }} className="ms-2" />
        <h5 className="my-1 p-1 fw-bold text-primary d-none d-md-block">
          משפט נט - ניהול משרד עורך דין
        </h5>
      </div>
      <div
        id="Messages"
        className="col-md-3 d-flex gap-4 justify-content-center text-white align-items-center"
      >
        <i class="bi bi-envelope"></i>
        <i class="bi bi-envelope"></i>
        <i class="bi bi-envelope"></i>
        <i class="bi bi-envelope"></i>
      </div>
      <div
        id="office_name"
        className="col-md-3 text-white d-flex align-items-center"
      >
        משרד עורך דין אהרון כהן
      </div>
      <div
        id="user"
        className="col-md-3 d-flex justify-content-end align-items-center"
      >
        מחובר: <span className="text-success">שלמה לקר</span>
      </div>
    </header>
  );
};

export default Header;
