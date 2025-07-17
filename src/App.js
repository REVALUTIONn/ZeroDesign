import logo from './logo.svg';
import './App.css';
import Logo from './components/logo';
import './styles/logo.css'
import Nav from './components/nav.jsx'
import './styles/nav.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <div className='nav_menu'>
          <Nav />
        </div>
      </header>
    </div>
  );
}

export default App;
