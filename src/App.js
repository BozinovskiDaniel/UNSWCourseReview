import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Main from "./pages/Main";

// Styling
import "./styling/App.css";
import "./styling/Home.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cse" component={Main} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
