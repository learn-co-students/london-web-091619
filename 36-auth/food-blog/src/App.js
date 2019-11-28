import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Redirect } from "react-router-dom";
import Auth from "./pages/Auth";
import paths from "./paths";
import API from "./adapters/API";
import NewPost from "./pages/Posts/New";

function App({ history }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.validate()
      .then(user => {
        setUser(user);
        history.push(paths.NEW_POST);
      })
      .catch(() => {
        history.push(paths.LOGIN);
      });
  }, []);

  const logout = () => {
    API.logout();
    setUser(null);
    history.push(paths.LOGIN);
  };

  return (
    <div className="App">
      {user && <button onClick={logout}>log out</button>}
      <Route
        path="/auth"
        render={routerProps => <Auth {...routerProps} setUser={setUser} />}
      />
      {user ? (
        <>
          <Route path="/posts/new" render={routerProps => <NewPost />} />
        </>
      ) : (
        <Redirect to={paths.LOGIN} />
      )}
    </div>
  );
}

export default App;
