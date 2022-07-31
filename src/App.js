import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        {/* public routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/linkpage" component={LinkPage} />
        <Route path="/unathorized" component={Unauthorized} />

        {/* protect these routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/lounge" component={Lounge} />

        {/* catch all */}
        <Route path="/missing" component={Missing} />
      </Switch>
    </Router>
  );
}

export default App;
