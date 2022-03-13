import "./App.css";
import Home from "./Home";
import { Route, NavLink, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
      
    </HashRouter>
  );
}

export default App;
