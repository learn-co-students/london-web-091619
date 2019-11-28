import React from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import PokemonShow from "./components/PokemonShow";
import PokemonForm from "./components/PokemonForm";

const ProtectedRoute = props =>
  props.user ? <Redirect to={props.path} /> : <Redirect to="/login" />;

const App = props => {
  const handleLoginClick = () => {
    setTimeout(() => {
      console.log("redirect to /pokemon");
      props.history.push("/pokemon");
    }, 500);
  };
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/pokemon" user={{ name: "sam" }} />
        <Route exact path={["/", "/pokemon"]}>
          <PokemonIndex />
        </Route>
        <Route
          exact
          path="/login"
          component={props => <button onClick={handleLoginClick}>Login</button>}
        />
        <Route exact path="/pokemon/new" component={PokemonForm} />
        <Route exact path="/pokemon/:id" component={PokemonShow} />
        <Route path="*">
          <div>404 not found</div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
