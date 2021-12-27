import React from "react";
import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};
function UserCard({ repo }) {
  return (
    <div className="card mb-3 bg-dark">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={repo?.owner?.avatar_url}
            className="img-fluid rounded-start text-white"
            alt={repo?.owner?.login}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-white">{repo.full_name}</h5>
            <p className="text-white">{repo?.language}</p>
            <p className="text-white">User : {repo?.owner?.login}</p>
            <button
              onClick={()=> window.open(`${repo.html_url}`)}
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Go to the repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
