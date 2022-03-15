import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const events = useSelector((state) => state);
  const currentEvent = events.find((event) => event.id === parseInt(id));

  useEffect(() => {
    if (currentEvent) {
      setTitle(currentEvent.title);
      setDate(currentEvent.date);
      setTime(currentEvent.time);
      setDescription(currentEvent.description);
      // setImg(currentEvent.img);
      setCategory(currentEvent.category);
      setNumber(currentEvent.number);
      setEmail(currentEvent.email);
      setCity(currentEvent.city);
    }
  }, [currentEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkTitle = events.find(
      (event) => event.id !== parseInt(id) && event.title === title
    );

    const checkNumber = events.find(
      (event) => event.id !== parseInt(id) && event.number === number
    );

    const checkEmail = events.find(
      (event) => event.id !== parseInt(id) && event.email === email
    );

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
      id: parseInt(id),
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

    dispatch({ type: "UPDATE_EVENT", payload: data });
    toast.success("Event updated!");
    navigate("/");
  };

  return (
    <div className="container">
      {currentEvent ? (
        <>
          <div className="row">
            <h1 className="display-4 text-center">Edit event {id}</h1>
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
                    onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <div className="form-group mt-1">
                  <label htmlFor="eventTime">Time</label>
                  <input
                    type="text"
                    className="form-control"
                    id="eventTime"
                    placeholder="Event Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}></input>
                </div>
                <div className="form-group mt-1">
                  <label htmlFor="eventDes">Description</label>
                  <textarea
                    className="form-control"
                    id="eventDes"
                    rows="3"
                    placeholder="Please leave description here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}></textarea>
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
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update Event"
                    className="btn btn-primary my-3"
                  />
                  <Link to="/" className="btn btn-danger my-3 mr-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Event with id {id} not exists
        </h1>
      )}
    </div>
  );
};

export default EditEvent;
