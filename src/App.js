// import logo from './logo.svg';
import Header from './components/header';
import MainBody from './components/mainBody';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (

    <div className="App">
      <Header/>
      
      <div className='main-body'>
    < MainBody/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
