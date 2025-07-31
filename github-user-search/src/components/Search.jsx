import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ onSearch }) => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      handleSearch(userName);
      if (onSearch) onSearch(userName);
    }
  };

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      console.error("Looks like we cant find the user", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="">
      <div>Search Components</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Enter Github User Name</label>
        <br></br>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter GitHub username"
          name="userName"
          id="userName"
          className="bg-black px-10"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-sm border-2 border-red-600 cursor-pointer"
        >
          Search User
        </button>
        <p>{loading}</p>
      </form>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}
        {userData && (
          <div>
            <img src={userData.avatar_url} alt="" />
            <h2>{userData.name || userData.login}</h2>
            <p>@{userData.login}</p>
            {userData.bio && <p>{userData.bio}</p>}
            <a href={userData.html_url}>GitHub Profile</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
