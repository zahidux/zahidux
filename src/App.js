import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
