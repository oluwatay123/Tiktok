// import logo from './logo.svg';
import Header from './components/header';
import MainBody from './components/mainBody';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (

    <div className="App">
      <div className='Header'>
      <Header/>
      </div>
      <div className='main-body'>
    < MainBody/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
