import '../styles/App.css';
import Layout from './Layout';
import Result from './pages/Result';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute exact path="/signup" component={Signup} />
              <PublicRoute exact path="/login" component={Login} />
              <PrivateRoute exact path="/quiz/:id" component={Quiz} />
              <PrivateRoute exact path="/result:id" component={Result} />
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
