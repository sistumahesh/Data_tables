import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import TableCustomizers from './components/TableCustomizers';
import DataTable from './components/DataTable';
import FilterHeader from './components/FilterHeader';
import FilterMenu from './components/FilterMenu';

function App() {
  return (
    <div className="App">
      <FilterHeader/>
      {/* <TableCustomizers/>
      <br/>
      <DataTable/> */}
    
    </div>
  );
}

export default App;
