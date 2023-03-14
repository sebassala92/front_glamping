import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';

import Footer from "./components/js/Footer";
import Header from "./components/js/Header";

import Home from "./Landing/js/Home";
import Landing2 from "./Landing/js/LandingDomo1";
import Reserva from "./Landing/js/Reserva";
import Contacto from "./Landing/js/Contacto";
import Escapada from "./Landing/js/Escapada";

function App() {

  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route  path="/" element={ <Home />}/>
          <Route  path="/domo1" element={ <Landing2/> }/>
          <Route  path="/domo2" element={ <Landing2/> }/>
          <Route  path="/cabana" element={ <Landing2/> }/>
          <Route  path="/reserva" element={ <Reserva/> }/>
          <Route  path="/contacto" element={ <Contacto/> }/>
          <Route  path="/escapada" element={ <Escapada/> }/>
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
