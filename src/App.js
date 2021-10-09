import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/blogs">Blogs</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </Router>
  );
}

