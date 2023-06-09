import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import PrimarySearchAppBar from './components/AppBar';
import Tour from './pages/tour';
function App() {
  return (
    <BrowserRouter>
    <PrimarySearchAppBar />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element={<Tour/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
