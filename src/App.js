import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  const username = "suyog_vairagade"
  const password = "suv@123"
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage u={username} p={password}/>
      </header>
    </div>
  );
}

export default App;
