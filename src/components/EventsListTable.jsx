import React from "react";
import EventsListHeader from "./EventsListHeader";
import EventsListRow from "./EventsListRow";
import { useSelector } from "react-redux";

const EventsListTable = () => {
  const events = useSelector((state) => state);

  return (
    <table className="table table-hover">
      <EventsListHeader />
      <tbody>
        {events.map((event) => (
          <EventsListRow
            key={event.id}
            id={event.id}
            title={event.title}
            category={event.category}
            date={event.date}
            time={event.time}
            city={event.city}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EventsListTable;
