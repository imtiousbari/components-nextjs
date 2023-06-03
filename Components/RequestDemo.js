import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import { Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentTime: "",
    companyArea: "",
    preferredMedia: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      appointmentTime: "",
      companyArea: "",
      preferredMedia: "",
    });
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDate = (date) => {
    setSelectedDate(date);
  };

  return (
   
    <div className="container ">
      <div className="row d-flex align-items-center justify-content-center vh-100  ">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body shadow-lg rounded">
              <p className="card-title text-center fs-3">Request your Demo</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                   Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Business Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="appointmentTime" className="form-label">
                    Preferred Appointment Date & Time
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDate}
                    showTimeSelect
                    dateFormat="yyyy-MM-dd HH:mm"
                    placeholderText="Select your preferred appointment date & time"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="companyArea" className="form-label">
                    Company Area
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyArea"
                    name="companyArea"
                    value={formData.companyArea}
                    onChange={handleChange}
                    placeholder="Enter your company area "
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="preferredMedia" className="form-label">
                    Preferred Meeting Media
                  </label>
                  <select
                    className="form-control"
                    id="preferredMedia"
                    name="preferredMedia"
                    value={formData.preferredMedia}
                    onChange={handleChange}
                  >
                    <option value="">Select your preferred media</option>
                    <option value="Phone">Phone</option>
                    <option value="Email">Email</option>
                    <option value="Zoom Meeting">Zoom Meeting</option>
                    <option value="Google Meet">Google Meet</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
