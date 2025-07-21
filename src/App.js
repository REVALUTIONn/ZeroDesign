import logo from './logo.svg';
import './App.css';
import Logo from './components/logo';
import './styles/logo.css'
import Nav from './components/nav.jsx'
import './styles/nav.css'
import Section1 from './components/section1.jsx'
import './styles/section1.css'
import Section2 from './components/section2.jsx'
import './styles/section2.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <div className='nav_menu'>
          <Nav />
        </div>
      </header>
      <div className='sections'>
          <section className='section1'><Section1 /></section>
          <section className='section2'><Section2 /></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
      </div>
    </div>
  );
}

export default App;
