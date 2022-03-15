import React from "react";

const EventsListHeader = () => {
  return (
    <thead>
      <tr className="text-center">
        <th>#</th>
        <th>Name</th>
        <th>Category</th>
        <th>Date</th>
        <th>Time</th>
        <th>City</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default EventsListHeader;
