import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import PostDetails from "./components/postDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/micro-blog">
              <Home />
            </Route>
            <Route path="/micro-blog/create">
              <Create />
            </Route>
            <Route path="/micro-blog/post/:id">
              <PostDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
