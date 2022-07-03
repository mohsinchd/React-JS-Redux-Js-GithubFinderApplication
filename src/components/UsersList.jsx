import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ user }) => {
  console.log(user);
  return (
    <div className="card card-body mb-3 text-dark">
      <div className="d-flex align-items-center">
        <div className="img-avatar-list">
          <img src={user.avatar_url} className="img-fluid" alt="imgAvatar" />
        </div>
        <div className="content-list ms-5">
          <h3 className="d-sm-h5">{user.login}</h3>
          <Link
            to={`/single-user/${user.login}`}
            className="btn btn-outline-secondary"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
