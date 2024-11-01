import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AddressProvider } from './context/AddressProvider';
import Home from './pages/Home';
import Intro from './pages/Intro';
import NotFound from './pages/NotFound';
import { Layout } from './styles/Layout';

function App() {
  return (
    <AddressProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AddressProvider>
  );
}

export default App;
