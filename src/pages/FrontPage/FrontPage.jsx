import React from "react";
import GithubImg from "../../utils/imgs/github.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./FrontPage.css";
const FrontPage = ({ switchPages }) => {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="page-content">
          <img src={GithubImg} className="image img-fluid" alt="gihubicon" />
          <h1>Github User Finder</h1>
          <p className="lead">
            Application to Find Users on Github version(1.0.0)
          </p>

          <button
            className="btn btn-light btn-md-sm btn-mine"
            onClick={() => switchPages()}
          >
            Enter Github Finder App
            <AiOutlineArrowRight size={30} className="ms-3" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
