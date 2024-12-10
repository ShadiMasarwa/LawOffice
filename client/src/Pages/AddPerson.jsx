import React, { useState, useContext } from "react";
import axios from "axios";
import Toast from "../components/Toast";
import GlobalContext from "../Hooks/GlobalContext";

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
  const { toastVisible, setToastVisible, setToastResult, setToastMessage } =
    useContext(GlobalContext);

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
    } else {
      ShowToast(0, "לא הוכנס מספר טלפון");
    }
  };

  const handleDeletePhone = (id) => {
    setClient((prevClient) => ({
      ...prevClient,
      phones: prevClient.phones.filter((phone) => phone.id !== id),
    }));
  };

  const ShowToast = (result, message) => {
    setToastMessage(message);
    setToastResult(result);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

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
    const newClient = {
      ...client,
      addDate: formattedDate,
      addedBy: "Shadi",
    };
    const updatedClient = {
      ...newClient,
      phones: newClient.phones.map(({ id, ...info }) => info),
    };
    try {
      const response = await axios.post(
        "http://localhost:3500/api/people",
        updatedClient
      );
      ShowToast(1, `(${client.fname} ${client.lname}) נשמר בהצלחה`);
    } catch (error) {
      ShowToast(
        0,
        `אירעה שגיאה בעת שמירת (${client.fname} ${client.lname}) למאגר נתונים!!`
      );
    }
  };

  return (
    <div>
      {toastVisible && <Toast />}
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
                    <td className="py-0">
                      <span
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDeletePhone(phone.id)}
                      >
                        <i className="bi bi-trash3-fill fs-7"></i>
                      </span>
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

        <div className="col-12 text-end">
          <button className="btn btn-primary" type="submit">
            הוספה
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;
