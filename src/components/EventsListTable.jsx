import React from "react";
import EventsListHeader from "./EventsListHeader";
import EventsListRow from "./EventsListRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setEvents } from "../redux/actions/eventActions";

const EventsListTable = () => {
  const events = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchEvents = async () => {
    return fetch("http://localhost:4000/events")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setEvents(data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(events.data);

  return (
    <table className="table table-hover">
      <EventsListHeader />
      <tbody>
        <EventsListRow />
      </tbody>
    </table>
  );
};

export default EventsListTable;
