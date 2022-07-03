import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaUsers } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdOutlinePublic } from "react-icons/md";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { setSingleUser, getRepos } from "../redux/actions/githubActions";
import { Link } from "react-router-dom";
import LatestRepos from "./LatestRepos";
const SingleUser = () => {
  const { name } = useParams();

  const singleUser = useSelector((state) => state.singleUser);
  const latestRepos = useSelector((state) => state.latestRepos);
  const dispatch = useDispatch();
  console.log(latestRepos);
  console.log(singleUser);

  const fetchUser = async () => {
    const fetchedData = await fetch(`https://api.github.com/users/${name}`, {
      headers: {
        authorization: "token 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",
      },
    });
    const user = await fetchedData.json();
    dispatch(setSingleUser(user));
  };

  const fetchRepos = async () => {
    const fetchedRepos = await fetch(
      `https://api.github.com/users/${name}/repos`,
      {
        headers: {
          authorization: "token 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",
        },
      }
    );

    const reps = await fetchedRepos.json();

    dispatch(getRepos(reps));
  };

  useEffect(() => {
    fetchUser();
    fetchRepos();
  }, []);

  return (
    <div className="container mt-5">
      <Link className="btn btn-outline-secondary mb-2" to="/">
        Back to Search
      </Link>
      <div className="row">
        <div className="col-md-4">
          <div className="img-user">
            <img
              src={singleUser.avatar_url}
              className="img-fluid rounded"
              alt="avatar"
            />
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="d-inline">{singleUser.name}</h3>
          <span class="badge rounded-pill bg-success ms-2">
            {singleUser.type}
          </span>
          <span class="badge rounded-pill bg-info text-dark ms-2">
            {singleUser.hireable ? "hireable" : "regular-user"}
          </span>

          <p>{singleUser.bio}</p>

          <a
            href={singleUser.html_url}
            target="_blank"
            className="btn btn-outline-secondary my-2"
          >
            Visit Github Profile
          </a>

          <div className="card card-body text-dark">
            <div className="row">
              <div className="col-md-4">
                <p className="text-secondary fw-bold">Location</p>
                <h4>
                  {singleUser.location
                    ? singleUser.location
                    : "User has added no location."}
                </h4>
              </div>
              <div className="col-md-4">
                <p className="text-secondary fw-bold">Website</p>
                <h4>
                  {singleUser.blog
                    ? singleUser.blog
                    : "User has added no website."}
                </h4>
              </div>
              <div className="col-md-4">
                <p className="text-secondary fw-bold">Twitter</p>
                <h4>
                  {singleUser.twitter_username
                    ? singleUser.twitter_username
                    : "User has added no twitter account."}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-body text-dark mt-5">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-between align-items-center">
            <div>
              <p className="text-secondary fw-bold">Followers</p>
              <h2>{singleUser.followers}</h2>
            </div>
            <div>
              <FaUsers size={60} style={{ color: "#198754" }} />
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-between align-items-center">
            <div>
              <p className="text-secondary fw-bold">Following</p>
              <h2>{singleUser.following}</h2>
            </div>
            <div>
              <ImUsers size={60} style={{ color: "#0dcaf0" }} />
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-between align-items-center">
            <div>
              <p className="text-secondary fw-bold">Public Repos</p>
              <h2>{singleUser.public_repos}</h2>
            </div>
            <div>
              <MdOutlinePublic size={60} style={{ color: "#198754" }} />
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-between align-items-center">
            <div>
              <p className="text-secondary fw-bold">Public Gists</p>
              <h2>{singleUser.public_gists}</h2>
            </div>
            <div>
              <RiHomeSmile2Fill size={60} style={{ color: "#0dcaf0" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-light">
        <div className="card card-body bg-secondary">
          <h2>Latest Repositories</h2>
          {latestRepos.map((repo) => {
            return <LatestRepos key={repo.id} repo={repo} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
