import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';

import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Servicios from 'containers/pages/Servicios';
import Nosotros from 'containers/pages/Nosotros';
import Planes from 'containers/pages/Planes';
import Blog from 'containers/pages/Blog';
import Contacto from 'containers/pages/Contacto';
import Inicio from 'containers/pages/Inicio';


function App() {
  return (
    <Provider store={store}>

    <Router>
      <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          {/* Home Display */}
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>

    </Provider>
  );
}

export default App;
