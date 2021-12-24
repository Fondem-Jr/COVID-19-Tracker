import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './pages/Details';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
