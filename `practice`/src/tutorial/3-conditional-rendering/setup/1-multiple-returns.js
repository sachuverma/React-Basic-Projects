import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/sachuverma";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [myProfile, setMyProfile] = useState({
    user: "default user",
    link: "#",
    avatar_url: "https://via.placeholder.com/200",
    followers: 0,
    following: 0,
  });

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login, avatar_url, followers, following, html_url } = user;
        setMyProfile({
          ...myProfile,
          user: login,
          link: html_url,
          avatar_url,
          followers,
          following,
        });

        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }
  return (
    <div>
      <a href={myProfile.link} target="_blank">
        <img
          style={{ maxWidth: "200px", borderRadius: "50%" }}
          src={myProfile.avatar_url}
          alt={myProfile.user}
        />
      </a>
      <h1>{myProfile.user}</h1>
      <ul>
        <li>
          <h4>Followers: {myProfile.followers}</h4>
        </li>
        <li>
          <h4>Following: {myProfile.following}</h4>
        </li>
      </ul>
    </div>
  );
};

export default MultipleReturns;
