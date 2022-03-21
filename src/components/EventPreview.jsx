import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { showEvent } from "../redux/actions/eventActions";

const EventPreview = () => {
  const event = useSelector((state) => state.event);
  const { title, date, time, description, img, category, phone, email, city } =
    event;
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(event);

  const fetchEventDetail = async () => {
    return fetch(`http://localhost:4000/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(showEvent(data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (id && id !== "") fetchEventDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <div className="col-md-10 shadow mx-auto my-3 rounded card">
        {Object.keys(event).length === 0 ? (
          <h1 className="display-3 my-5 text-center">
            Event with id {id} not exists
          </h1>
        ) : (
          <div className="container p-3 card-body">
            <h5 className="card-title">Title: {title}</h5>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Description: {description}</p>

            <img
              className="img-fluid rounded mb-3 mx-auto d-block"
              src={img}
              alt={title}></img>
            <p>Category: {category}</p>
            <p>Phone: {phone}</p>
            <p>
              Email: <a href="mailto:{email}">{email}</a>
            </p>
            <p>City: {city}</p>
            <Link to="/" className="btn btn-danger btn-lg">
              Close
            </Link>
          </div>
        )}
      </div>
    </>
  );
  //   const [title, setTitle] = useState("");
  //   const [date, setDate] = useState("");
  //   const [time, setTime] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [img, setImg] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [number, setNumber] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [city, setCity] = useState("");

  //   const { id } = useParams();

  //   const events = useSelector((state) => state);
  //   const currentEvent = events.find((event) => event.id === parseInt(id));

  //   useEffect(() => {
  //     if (currentEvent) {
  //       setTitle(currentEvent.title);
  //       setDate(currentEvent.date);
  //       setTime(currentEvent.time);
  //       setDescription(currentEvent.description);
  //       setImg(currentEvent.img);
  //       setCategory(currentEvent.category);
  //       setNumber(currentEvent.number);
  //       setEmail(currentEvent.email);
  //       setCity(currentEvent.city);
  //     }
  //   }, [currentEvent]);

  //   return (
  //     <div className="container">
  //       {currentEvent ? (
  //         <>
  //           <div className="row">
  //             <h1 className="display-4 text-center">Event details {id}</h1>
  //             <div className="col-md-6 shadow mx-auto my-3 rounded">
  //               <form className="m-1">
  //                 <div className="form-group mt-1">
  //                   <label htmlFor="eventTitle">Title</label>
  //                   <input
  //                     type="text"
  //                     className="form-control"
  //                     id="eventTitle"
  //                     placeholder="Event Title"
  //                     value={title}
  //                     disabled></input>
  //                 </div>
  //                 <div className="form-group mt-1">
  //                   <label htmlFor="eventDate">Date</label>
  //                   <input
  //                     type="date"
  //                     className="form-control"
  //                     id="eventDate"
  //                     value={date}
  //                     disabled></input>
  //                 </div>
  //                 <div className="form-group mt-1">
  //                   <label htmlFor="eventTime">Time</label>
  //                   <input
  //                     type="text"
  //                     className="form-control"
  //                     id="eventTime"
  //                     placeholder="Event Time"
  //                     value={time}
  //                     disabled></input>
  //                 </div>
  //                 <div className="form-group mt-1">
  //                   <label htmlFor="eventDes">Description</label>

  //                   <div>{description}</div>
  //                 </div>
  //                 <div className="form-group mt-1">
  //                   <label htmlFor="eventImg">Image</label>
  //                   <img src={img} alt="Event" />
  //                 </div>
  //                 <div className="form-group mt-1">
  //                   <label htmlFor="eventCat">Category</label>
  //                   <select
  //                     id="eventCat"
  //                     className="form-control"
  //                     value={category}
  //                     disabled>
  //                     <option value="sport">Sport</option>
  //                     <option value="culture">Culture</option>
  //                     <option value="health">Health</option>
  //                   </select>
  //                 </div>
  //                 <div className="form-group mt-1">
  //                   <label htmlFor="eventTel">Phone</label>
  //                   <input
  //                     type="tel"
  //                     className="form-control"
  //                     id="eventTel"
  //                     placeholder="Phone number"
  //                     value={parseInt(number)}
  //                     disabled></input>
  //                 </div>
  //                 <div className="form-group mt-1">
  //                   <label htmlFor="eventEmail">E-mail</label>
  //                   <input
  //                     type="email"
  //                     className="form-control"
  //                     id="eventEmail"
  //                     placeholder="E-mail"
  //                     value={email}
  //                     disabled></input>
  //                 </div>
  //                 <div className="form-group mt-1">
  //                   <label htmlFor="eventCity">City</label>
  //                   <input
  //                     type="text"
  //                     className="form-control"
  //                     id="eventCity"
  //                     placeholder="City"
  //                     value={city}
  //                     disabled></input>
  //                 </div>
  //                 <div className="form-group">
  //                   <Link to="/" className="btn btn-danger my-3 mr-3">
  //                     Close
  //                   </Link>
  //                 </div>
  //               </form>
  //             </div>
  //           </div>
  //         </>
  //       ) : (
  //         <h1 className="display-3 my-5 text-center">
  //           Event with id {id} not exists
  //         </h1>
  //       )}
  //     </div>
  //   );
  // };
};

export default EventPreview;
