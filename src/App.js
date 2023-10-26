
import './App.css';
import Home from './Handson/Home';
import Login from './Handson/Login';
import Register from './Handson/Register';
import LinkCompo from './Handson/Link';
import {  Route,Routes, BrowserRouter} from 'react-router-dom';
// import Login from './Login';
// import Register from './Register';

const App = () => {
  return (
    
      <div>
        <BrowserRouter>
       
        <Routes>
        <Route path="/" element={<><Home/> <LinkCompo/></>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} /> 
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
