import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EventsListTable from "./EventsListTable";

const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
  padding-top: 5vh;
`;

const Home = () => {
  return (
    <Wrapper>
      <div className="card bg-light">
        <div className="card-header d-flex">
          <Link to="/add" className="btn btn-success">
            Add Event
          </Link>
        </div>

        <div className="card-body">
          <EventsListTable />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
