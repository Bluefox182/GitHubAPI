import React, { useState, useEffect } from "react";
import { Form, Card, Icon, Image } from "semantic-ui-react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  return (
    <div className="navbar">
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="GitHub User"
              name="github user"
              onChange={handleSearch}
            />
            <Form.Button content="Search" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default App;
