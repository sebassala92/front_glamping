import {
  Routes,
  Route
} from 'react-router-dom';

import Footer from "./components/js/Footer";
import Header from "./components/js/Header";

import Home from "./Landing/js/Home";
import LandingDomo1 from "./Landing/js/LandingDomo1";
import LandingDomo2 from "./Landing/js/LandingDomo2";
import LandingCabana from "./Landing/js/LandingCabana";
import Reserva from "./Landing/js/Reserva";
import Contacto from "./Landing/js/Contacto";
import Escapada from "./Landing/js/Escapada";

function App() {

  return (
    <>
      <Header />

        <Routes>
          <Route  path="/" element={ <Home />}/>
          <Route  path="/domo1" element={ <LandingDomo1/> }/>
          <Route  path="/domo2" element={ <LandingDomo2/> }/>
          <Route  path="/cabana" element={ <LandingCabana/> }/>
          <Route  path="/reserva" element={ <Reserva/> }/>
          <Route  path="/contacto" element={ <Contacto/> }/>
          <Route  path="/escapada" element={ <Escapada/> }/>
        </Routes>

      <Footer />
    </>
  );
}

export default App;
