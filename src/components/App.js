import '../styles/App.css';
import Layout from './Layout';
// import Home from './pages/Home';
// import Login from './pages/Login';
import Quiz from './pages/Quiz';
// import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home />
        <Signup />
        <Login /> */}
        <Quiz/>
      </Layout>
      
    </div>
  );
}

export default App;
