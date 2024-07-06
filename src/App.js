
import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App-container">
      <Header/>
      <div>
        <button><Link to={`/users`}>User</Link></button>
        <button><Link to={`/admins`}>Admin</Link></button>
      </div>
    </div>
  );
}

export default App;
