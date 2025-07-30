import React from "react";
import Search from "../components/Search";
import { fetchUserData } from "../services/githubService";
import { useState } from "react";

const Home = () => {
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
    <div>
      <div>
        <Search onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching user data.</p>}
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

export default Home;
