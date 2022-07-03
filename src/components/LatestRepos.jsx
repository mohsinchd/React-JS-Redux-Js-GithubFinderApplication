import React from "react";
import { FaLink } from "react-icons/fa";
const LatestRepos = ({ repo }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item bg-dark text-light">
        <p className="fw-bold">
          <span className="me-2">{<FaLink />}</span>
          <a href={repo.html_url} className="link-light">
            {repo.name}
          </a>
        </p>
        <p>
          {repo.description
            ? repo.description
            : "User has added no description of this Repository."}
        </p>
        <span class="badge rounded-pill bg-success me-2">{repo.forks}</span>
        <span class="badge rounded-pill bg-danger me-2">
          {repo.open_issues}
        </span>
        <span class="badge rounded-pill bg-secondary me-2">
          {repo.watchers_count}
        </span>
        <span class="badge rounded-pill bg-warning me-2">
          {repo.stargazers_count}
        </span>
      </li>
    </ul>
  );
};

export default LatestRepos;
