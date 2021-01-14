import "./App.css";
import Home from "./Pages/Home";
import SignUp from "./Components/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./Components/Signin";
function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
