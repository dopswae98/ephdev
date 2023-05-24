//import logo from './logo.svg';
import "./App.css";
// import CarRental from "./pages/CarRental";
// import ContactPage from "./pages/ContactPage";
// import Portifolio from "./pages/Portifolio";
// import Printsbase from "./pages/Printsbase";
//import MainPage from './pages/MainPage';
//import MobileApp from "./pages/MobileApp";
// import Wholelight from "./pages/Wholelight";
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap';
//import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.css";
// import Portifolioss from "./pages/Portifolioss";
import UXPortifolio from "./pages/UXPortifolio";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/js/bootstrap';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    // </div>
    // <div className='p-4 bg-light'>
    <div className="">
      {/* <MainPage/> */}
      {/* <MobileApp/> */}
      {/* <Wholelight /> */}
      {/* <Printsbase /> */}
      {/* <Portifolio /> */}
      {/* <ContactPage /> */}
      {/* <Portifolioss /> */}
      <UXPortifolio />
    </div>
  );
}

export default App;
library.add(fab, fas, far);
