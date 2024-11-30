import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signin' element={<Signin/>}/>
    </Routes>
    </Router>
  );
}

export default App;
