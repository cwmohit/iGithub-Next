import React from "react";
import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};
function UserCard({ user }) {
  return (
    <div className="card mb-3 bg-dark">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={user.avatar_url}
            className="img-fluid rounded-start text-white"
            alt={user.login}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-white">{user.login}</h5>
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Go to the profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
