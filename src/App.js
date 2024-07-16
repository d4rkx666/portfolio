import './App.css';
import './fonts.css';
import './keyframes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainHeader } from './components/MainHeader';
import { Routes, Route, HashRouter } from "react-router-dom";


import Home from "./pages";
import Resume from "./pages/resume";


function App() {
  return (
    <HashRouter>
        <MainHeader/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
