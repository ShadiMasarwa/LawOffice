import React, { useState } from "react";
import axios from 'axios';

const AddPerson = () => {
  const [client, setClient] = useState({
    fname: "",
    mname: "",
    lname: "",
    gender: 1,
    idType: 1,
    id: 0,
    occupation: "",
    workat: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    email: "",
    phones: [],
    notes: "",
    addDate: "",
    addedBy: "",
  });
  const [phone, setPhone] = useState({ type: 1, num: "", note: "" });
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [id]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const { id, value } = e.target;
    setPhone((prevPhone) => ({
      ...prevPhone,
      [id]: value,
    }));
  };

  const handleAddPhone = () => {
    if (phone.num.trim()) {
      setClient((prevClient) => ({
        ...prevClient,
        phones: [...prevClient.phones, { ...phone, id: Date.now() }],
      }));
      setPhone({ type: 1, num: "", note: "" });
    }
  };

  const handleDeletePhone = (id) => {
    setClient((prevClient) => ({
      ...prevClient,
      phones: prevClient.phones.filter((phone) => phone.id !== id),
    }));
  };

  const ShowToast = (fname, lname) =>{
     const message = `${fname} ${lname} נוסף/ה בהצלחה`;
    setToastMessage(message);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const options = { timeZone: "Asia/Jerusalem" }; 
    const formatter = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      ...options,
    });
    const formattedDate = formatter.format(now);

    // setClient((prevClient) => ({
    //   ...prevClient,
    //   addDate: formattedDate,
    //   addedBy: "Shadi",
    // }));

     const newClient = {
      ...client,
      addDate: formattedDate,
      addedBy: "Shadi",
      };

     try {
        const response = await axios.post('http://localhost:3500/api/people', newClient);
        console.log('Saved person:', response.data);
        ShowToast(client.fname, client.lname);
      } catch (error) {
        console.error('Error saving person:', error);
        ShowToast("Problem", "client.lname");

      }
    };

  return (
    <div>
      {toastVisible && (
        <div
          className="toast show position-fixed bottom-0 end-0 m-3"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ zIndex: 1055 }}
        >
          <div className="toast-header bg-success text-white">
            <strong className="me-auto">המידע נשמר</strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => setToastVisible(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body fw-bold">{toastMessage}</div>
        </div>
      )}
      <h2 className="text-primary">הוספת אנשים</h2>
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="fname"
              value={client.fname || ""}
              onChange={handleInputChange}
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
              value={client.mname || ""}
              onChange={handleInputChange}
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
              value={client.lname || ""}
              onChange={handleInputChange}
              placeholder="שם משפחה"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group ">
            <span className="input-group-text">
              <i className="bi bi-gender-ambiguous"></i>
            </span>
            <select
              className="form-select"
              id="gender"
              value={client.gender || 1}
              onChange={handleInputChange}
            >
              <option defaultValue disabled>
                מין
              </option>
              <option value={1}>נקבה</option>
              <option value={2}>זכר</option>
              <option value={3}>אחר</option>
            </select>
          </div>
        </div>

        <div className="col-md-3">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-person-video2"></i>
            </span>
            <select
              className="form-select"
              id="idType"
              value={client.idType || 1}
              onChange={handleInputChange}
            >
              <option defaultValue disabled value="">
                סוג זיהוי
              </option>
              <option value={1}>תעודת זהות</option>
              <option value={2}>מספר חברה</option>
              <option value={3}>דרכון זר</option>
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
              value={client.id || ""}
              onChange={handleInputChange}
              placeholder="מספר זיהוי"
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
              value={client.occupation || ""}
              onChange={handleInputChange}
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
              value={client.workat || ""}
              onChange={handleInputChange}
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
              value={client.state || ""}
              onChange={handleInputChange}
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
              value={client.city || ""}
              onChange={handleInputChange}
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
              value={client.address || ""}
              onChange={handleInputChange}
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
              id="zip"
              value={client.zip || ""}
              onChange={handleInputChange}
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
              value={client.email || ""}
              onChange={handleInputChange}
              placeholder="דואר אלקטרוני"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-telephone-plus"></i>
            </span>
            <select
              className="form-select"
              id="type"
              value={phone.type}
              onChange={handlePhoneChange}
            >
              <option defaultValue disabled value="">
                סוג טלפון
              </option>
              <option value={1}>סלולרי</option>
              <option value={2}>בית</option>
              <option value={3}>פקס בבית</option>
              <option value={4}>טלפון בעבודה</option>
              <option value={5}>פקס בעבודה</option>
              <option value={6}>אחר</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="bi bi-telephone-plus"></i>
            </span>
            <input
              type="text"
              className="form-control text-end"
              id="num"
              value={phone.num}
              onChange={handlePhoneChange}
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
              id="note"
              value={phone.note}
              onChange={handlePhoneChange}
              placeholder="הערה לטלפון"
            />
          </div>
        </div>
        <div className="col-md-3 d-flex gap-1">
          <div className="col-md-1">
            <button
              type="button"
              id="addPhone"
              className="btn btn-success"
              onClick={handleAddPhone}
            >
              +
            </button>
          </div>
          <div className="col-md-11 ">
            <table className="table table-striped  w-100">
              <thead>
                <tr>
                  <th scope="col" className="py-0">
                    #
                  </th>
                  <th scope="col" className="py-0">
                    טלפון
                  </th>
                  <th scope="col" className="py-0">
                    מחק
                  </th>
                </tr>
              </thead>
              <tbody>
                {client.phones.map((phone, index) => (
                  <tr key={phone.id}>
                    <th scope="row" className="py-0">
                      {index + 1}
                    </th>
                    <td className="py-0">{phone.num}</td>
                    <td
                      // style={{ paddingTop: "0", paddingBottom: "0" }}
                      className="py-0"
                    >
                      <span
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDeletePhone(phone.id)}
                      >
                        <i className="bi bi-trash3-fill fs-7"></i>
                      </span>
                      {/* <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        
                      ></button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              value={client.notes || ""}
              onChange={handleInputChange}
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
              disabled
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
              disabled
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

export default AddPerson;
