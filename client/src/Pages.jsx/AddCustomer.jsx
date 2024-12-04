import React from "react";

const AddCustomer = () => {
  return (
    <div>
      <h2 className="text-primary">הוספת אנשים</h2>
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="שם פרטי/חברה"
              required
            />
            <div className="valid-feedback">נראה טוב!</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="mname"
              placeholder="שם אב"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="lname"
              placeholder="שם משפחה"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group ">
            <span className="input-group-text">
              <i className="bi bi-gender-ambiguous"></i>
            </span>
            <select className="form-select" id="gender">
              <option defaultValue disabled>
                מין
              </option>
              <option>נקבה</option>
              <option>זכר</option>
            </select>
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-person-video2"></i>
            </span>
            <select className="form-select" id="idtype" required>
              <option defaultValue disabled value="">
                סוג זיהוי
              </option>
              <option>תעודת זהות</option>
              <option>מספר חברה</option>
              <option>דרכון זר</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-person-video2"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="id"
              placeholder="מספר"
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-buildings"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="occupation"
              placeholder="מקצוע"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-buildings"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="workat"
              placeholder="מקום עבודה"
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-signpost-2"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="מדינה"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-signpost-2"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="city"
              required
              placeholder="עיר"
            />
            <div className="invalid-feedback">יש להכניס שם עיר.</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-signpost-2"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="כתובת"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-signpost-2"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="postal"
              placeholder="מיקוד"
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control text-end"
              id="email"
              placeholder="דואר אלקטרוני"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-telephone-plus"></i>
            </span>
            <select className="form-select" id="phoneType" required>
              <option defaultValue disabled value="">
                סוג טלפון
              </option>
              <option>סלולרי</option>
              <option>בית</option>
              <option>פקס בבית</option>
              <option>טלפון בעבודה</option>
              <option>פקס בעבודה</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-telephone-plus"></i>
            </span>
            <input
              type="phone"
              className="form-control text-end"
              id="phone_num"
              placeholder="טלפון"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-journal"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="phone_note"
              placeholder="הערה לטלפון"
            />
          </div>
        </div>

        <div className="col-md-1 d-flex align-items-start">
          <button type="button" className="btn btn-success align-self-start">
            +
          </button>
        </div>
        <div className="col-md-2 d-flex align-items-start">
          <div className="ps-2">
            <label htmlFor="phone_list" className="form-label">
              טלפונים
            </label>
            <textarea
              className="form-control"
              id="phone_list"
              rows="3 "
              disabled
            ></textarea>
          </div>
        </div>
        <div className="col-md-12 ">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-journal"></i>
            </span>
            <textarea
              className="form-control"
              id="notes"
              rows="3"
              placeholder="הערות"
            ></textarea>
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-calendar3"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="add_date"
              placeholder="תאריך הוספה"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="add_user"
              placeholder="נוסף על ידי"
            />
          </div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
