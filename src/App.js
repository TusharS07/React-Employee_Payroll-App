import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Table from './Components/Table';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element= {<Table/>} />
        <Route path="/addEmp" element= {<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
