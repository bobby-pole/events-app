import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const EventsListRow = ({ id, title, category, date, time, city }) => {
  const dispatch = useDispatch();

  const deleteEvent = (id) => {
    dispatch({ type: "DELETE_EVENT", payload: id });
  };

  return (
    <>
      <tr className="text-center">
        <td>{id + 1}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{date}</td>
        <td>{time}</td>
        <td>{city}</td>
        <td>
          <Link to={`/show/${id}`} className="btn btn-primary m-1">
            Details
          </Link>
          <Link to={`/edit/${id}`} className="btn btn-small btn-warning m-1">
            Edit
          </Link>
          <button
            type="button"
            onClick={() => deleteEvent(id)}
            className="btn btn-small btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default EventsListRow;
