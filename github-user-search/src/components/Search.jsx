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
      </form>
    </div>
  );
};

export default Search;
