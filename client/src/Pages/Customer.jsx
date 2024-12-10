import React, { useState, useEffect } from "react";
import axios from "axios";

const genderMap = {
  1: "נקבה",
  2: "זכר",
  3: "אחר",
};

const idTypeMap = {
  1: "ת.ז.",
  2: "חברה",
  3: "דרכון",
};

const phoneTypeMap = {
  1: "נייד",
  2: "בית",
  3: "פקס בית",
  4: "טלפון עבודה",
  5: "פקס עבודה",
  6: "אחר",
};

const Customer = ({ customerId }) => {
  const [customer, setCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3500/api/people/${customerId}`
        );
        setCustomer(response.data);
        setFormData(response.data);
      } catch (err) {
        console.error("טעינת הנתונים נכשלה:", err);
      }
    };

    fetchCustomer();
  }, [customerId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:3500/api/people/${customerId}`,
        formData
      );
      setCustomer(formData);
      setIsEditing(false);
    } catch (err) {
      console.error("עדכון הנתונים נכשל:", err);
    }
  };

  const handleCancel = () => {
    setFormData(customer);
    setIsEditing(false);
  };

  if (!customer) {
    return <p>טוען נתונים...</p>;
  }

  return (
    <div className="container">
      <h2>{`${customer.fname} ${customer.mname || ""} ${customer.lname}`}</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">מין:</label>
          <select
            name="gender"
            className="form-select"
            value={formData.gender}
            disabled={!isEditing}
            onChange={handleInputChange}
          >
            {Object.entries(genderMap).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">סוג מזהה:</label>
          <select
            name="idType"
            className="form-select"
            value={formData.idType}
            disabled={!isEditing}
            onChange={handleInputChange}
          >
            {Object.entries(idTypeMap).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">מספר מזהה:</label>
          <input
            type="text"
            name="id"
            className="form-control"
            value={formData.id}
            disabled={!isEditing}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">כתובת:</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={formData.address}
            disabled={!isEditing}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">טלפונים:</label>
          {formData.phones.map((phone, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                name={`phones[${index}].num`}
                className="form-control"
                value={phone.num}
                disabled={!isEditing}
                onChange={(e) =>
                  setFormData((prev) => {
                    const phones = [...prev.phones];
                    phones[index].num = e.target.value;
                    return { ...prev, phones };
                  })
                }
              />
              <small className="text-muted">{phoneTypeMap[phone.type]}</small>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label className="form-label">הערות:</label>
          <textarea
            name="notes"
            className="form-control"
            value={formData.notes}
            disabled={!isEditing}
            onChange={handleInputChange}
          />
        </div>
        {isEditing ? (
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSave}
            >
              שמירה
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              ביטול
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsEditing(true)}
          >
            עדכון
          </button>
        )}
      </form>
    </div>
  );
};

export default Customer;
