import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./DataTable.css"
function createData(
   id:number,
  lastName: string,
  firstName: string,
  age: number,
  city: string,
) {
  return { id, lastName, firstName, age, city };
}

const rows = [
  createData( 1,'Snow','Jon',35,"Texas"),
  createData( 2,  'Lannister',  'Cersei',  42, "France" ),
  createData( 3,  'Lannister',  'Jaime',  45,"New York"  ),
  createData(  4,  'Stark',  'Arya',  16 ,"Chicago"),
  createData( 5, 'Clifford', 'Ferrara', 44,"Phoenix"),
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell'> Emp ID</TableCell>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell' align="right">First name</TableCell>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell' align="right">Last name</TableCell>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell' align="right">Age</TableCell>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell' align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
              key={row.id}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableBodyCell' component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className='TableBodyCell' align="right">{row.firstName}</TableCell>
              <TableCell className='TableBodyCell' align="right">{row.lastName}</TableCell>
              <TableCell className='TableBodyCell' align="right">{row.age}</TableCell>
              <TableCell className='TableBodyCell' align="right">{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}