import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ContentList from "../components/ContentList";

const Home = () => {
  return (
    <div>
      <ContentList />
      <Link to="/write">
        <button className="write-btn">
          <FontAwesomeIcon icon={faPen} />
        </button>
      </Link>
    </div>
  );
};

export default Home;
