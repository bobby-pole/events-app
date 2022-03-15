import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const events = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkTitle = events.find((event) => event.title === title && title);

    const checkNumber = events.find(
      (event) => event.number === number && number
    );

    const checkEmail = events.find((event) => event.email === email && email);

    if (
      !title ||
      !number ||
      !email ||
      !date ||
      !time ||
      !description ||
      !city
    ) {
      return toast.warning("Please fill all fields");
    }
    if (checkTitle) {
      return toast.error("This title is already in use");
    }
    if (checkNumber) {
      return toast.error("This phone number is already in use");
    }
    if (checkEmail) {
      return toast.error("This e-mail is already in use");
    }

    const data = {
      id: events[events.length - 1].id + 1,
      title,
      number,
      email,
      date,
      time,
      description,
      img,
      category,
      city,
    };

    dispatch({ type: "ADD_EVENT", payload: data });
    toast.success("Event added!");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-4 text-center">Add new event</h1>
        <div className="col-md-6 shadow mx-auto my-3 rounded">
          <form onSubmit={handleSubmit} className="m-1">
            <div className="form-group mt-1">
              <label htmlFor="eventTitle">Title</label>
              <input
                type="text"
                className="form-control"
                id="eventTitle"
                placeholder="Event Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="eventDate">Date</label>
              <input
                type="date"
                className="form-control"
                id="eventDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="eventTime">Time</label>
              <input
                type="text"
                className="form-control"
                id="eventTime"
                placeholder="Event Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="eventDes">Description</label>
              <textarea
                className="form-control"
                id="eventDes"
                rows="3"
                placeholder="Please leave description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required></textarea>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="eventImg">Image</label>
              <input
                type="file"
                className="form-control"
                id="eventImg"
                value={img}
                onChange={(e) => setImg(e.target.value)}></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="eventCat">Category</label>
              <select
                id="eventCat"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="sport">Sport</option>
                <option value="culture">Culture</option>
                <option value="health">Health</option>
              </select>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="eventTel">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="eventTel"
                placeholder="Phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="eventEmail">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="eventEmail"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="eventCity">City</label>
              <input
                type="text"
                className="form-control"
                id="eventCity"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}></input>
            </div>
            <div className="form-group d-flex justify-content-end">
              <input
                type="submit"
                value="Add Event"
                className="btn btn-success m-3"
              />
              <Link to="/" className="btn btn-danger m-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
