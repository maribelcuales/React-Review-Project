import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

export default function App() {
  return (
    // Wrap content with <Router>
    <Router>
      <div>
        {/*Use <Link> to set the URL of an internal path */} 
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/blogs">Blogs</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      
      <hr />
  
      {/* <Switch> conditionally renders the <Route> that matches the <Link path> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/contact">
          <Contact /> 
        </Route>
      </Switch>
    </Router>    
  );
}

