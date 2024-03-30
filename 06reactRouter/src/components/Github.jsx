import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/vishal-agarwal12")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const formattedDate = data.updated_at
    ? new Date(data.updated_at).toLocaleString()
    : "";
  return (
    <div className="github">
      <h2>Github Followers: {data.followers}</h2>
      <h2>Github Following: {data.following}</h2>
      <h2>Public Repositories: {data.public_repos}</h2>
      <h2>Last Updated: {formattedDate}</h2>
      <img src={data.avatar_url} alt="profile" />
    </div>
  );
};

export default Github;
