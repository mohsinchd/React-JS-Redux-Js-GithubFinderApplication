import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UsersList from "./UsersList";
import Spinner from "./layout/Spinner";
import { setUsers } from "../redux/actions/githubActions";

const SearchUsers = () => {
  const [userInput, setUserInput] = useState("");
  const [spinner, setSpinner] = useState(false);
  const usersData = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();

  const fetchUsers = async () => {
    setSpinner(true);
    const fetchedUsers = await fetch(
      `https://api.github.com/search/users?q=${userInput}`
    );

    console.log(fetchedUsers);

    const data = await fetchedUsers.json();
    dispatch(setUsers(data));
    setSpinner(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userInput.length === 0) {
      return alert("Please input first");
    }
    fetchUsers();
  };

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control form-control-lg "
            placeholder="Search Here"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="btn btn-secondary"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
      {spinner && <Spinner />}
      {usersData.map((user) => (
        <UsersList key={user.id} user={user} />
      ))}
    </div>
  );
};

export default SearchUsers;
