import React from "react";
import { useState } from "react";
import { searchGithubUsers } from "../services/githubService";

const Search = ({ onSearch }) => {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
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
    setUserData([]);

    try {
      const data = await searchGithubUsers({
        username,
        location,
        repo,
      });
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
        <br></br>
        <label htmlFor="location">Enter location</label>
        <input
          type="text"
          name=""
          id="location"
          className="pt-3"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Lagos - Akure"
        />

        <br></br>
        <label htmlFor="repo">Enter number of minimum Repo </label>
        <input
          type="number"
          name=""
          id=""
          value={repo}
          onChange={(e) => setMinRepos(e.target.vale)}
          placeholder="Enter Min number of Repo"
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
            {userData.map((user) => (
              <div key={user.id} style={{ marginBottom: "1rem" }}>
                <img src={user.avatar_url} alt="" width={50} />
                <h2>{user.login}</h2>
                <a href={user.html_url}>GitHub Profile</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
