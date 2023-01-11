import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Table from './Components/Table';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
    <Router>
      <Routes>
        <Route path="/" element= {<Table/>} />
        <Route path="/addEmp" element= {<Form />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
