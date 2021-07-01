import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Create from "./components/Create";
import PostDetails from "./components/postDetails";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/post/:id">
              <PostDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
