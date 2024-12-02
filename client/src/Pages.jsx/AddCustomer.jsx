import React from "react";

const AddCustomer = () => {
  return (
    <div>
      <h2 className="text-primary">הוספת אנשים</h2>
      <form className="row g-3 needs-validation" novalidate>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="שם פרטי/חברה"
            required
          />
          <div className="valid-feedback">נראה טוב!</div>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="mname"
            placeholder="שם אב"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="שם משפחה"
          />
        </div>
        <div className="col-md-3">
          <select class="form-select" id="gender" required>
            <option selected disabled value="">
              מין
            </option>
            <option>נקבה</option>
            <option>זכר</option>
          </select>
        </div>

        <div className="col-md-3">
          <select class="form-select" id="idtype" required>
            <option selected disabled value="">
              סוג זיהוי
            </option>
            <option>תעודת זהות</option>
            <option>מספר חברה</option>
            <option>דרכון זר</option>
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="id"
            placeholder="מספר"
          />
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="occupation"
            placeholder="מקצוע"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="workat"
            placeholder="מקום עבודה"
          />
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="state"
            placeholder="מדינה"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="city"
            required
            placeholder="עיר"
          />
          <div className="invalid-feedback">יש להכניס שם עיר.</div>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="כתובת"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="postal"
            placeholder="מיקוד"
          />
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
            <label className="form-check-label" for="invalidCheck">
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
