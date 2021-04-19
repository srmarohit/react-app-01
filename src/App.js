import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/pages/Home';
import SignIn from './container/pages/SignIn';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
            </Switch>
         </Router>            
  );
}

export default App;
