import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EventsListRow = () => {
  const events = useSelector((state) => state.allEvents.events);
  const renderList = events.map((event) => {
    const { id, title, category, date, time, city } = event;
    return (
      <>
        <tr className="text-center" key={id}>
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
          </td>
        </tr>
      </>
    );
  });

  return <>{renderList}</>;
};

export default EventsListRow;
