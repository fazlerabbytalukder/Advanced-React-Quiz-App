import '../styles/App.css';
import Layout from './Layout';
import Result from './pages/Result';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/result" component={Result} />
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
