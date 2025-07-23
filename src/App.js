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
import Section3 from './components/section3.jsx'
import './styles/section3.css'
import Section4 from './components/section4.jsx'
import './styles/section4.css'
import Section5 from './components/section5.jsx'
import './styles/section5.css'
import Section6 from './components/section6.jsx'
import './styles/section6.css'
import Footer from './components/footer.jsx'
import './styles/footer.css'
import Brand from './components/brand.jsx'

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
          <section className='section3'><Section3 /></section>
          <section className='section4'><Section4 /></section>
          <section className='section5'><Section5 /></section>
          <section className='section6'><Section6 /></section>
          <footer className='footer'><Footer /></footer>
          <div className='brand'><Brand /></div>
      </div>
    </div>
  );
}

export default App;
