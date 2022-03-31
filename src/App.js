import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Invite from './components/Invite';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/invite' element={<Invite/>}/>
      </Routes>
    </Router>
  );
}

export default App;
