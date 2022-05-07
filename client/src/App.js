// import logo from './logo.svg';
// import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Booking from './component/Booking/Booking';
import Display from './component/Display/Display';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">

      {/* <h3>Namaste</h3> */}
      <Header />

      <Display />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
