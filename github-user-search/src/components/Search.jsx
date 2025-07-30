import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ onSearch }) => {
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      onSearch(userName);
    }
  };

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
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
          className="border-black border-2 mb-3 p-2 rounded-sm"
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
        <Search onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>Look Like we can't find the user.</p>}
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
