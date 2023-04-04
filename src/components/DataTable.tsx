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
  id : number,
  machine:string,
  runType: string,
  hardwareVersion: string,
  softwareVersion: string,
  machineUse: string,
) {
  return { id,machine, runType, hardwareVersion, softwareVersion, machineUse};
}


const rows = [
  createData( 1,"Machine 1",'Test Run','2.0.0',"1.0.0","Production"),
  createData( 2,"Machine 2", 'Production',  '2.1.0',"1.2.0", "Testing" ),
  createData( 3,"Machine 3", 'Test Run',  '2.2.0', "1.1.0","Development"  ),
  createData( 4,"Machine 4", 'Production',  '2.3.0', "1.3.0" ,"Production"),
  createData( 5,"Machine 5", 'Production', '2.1.1',"1.2.1","Testing"),
  createData( 6,"Machine 1",'Production','2.1.0',"1.2.0","Testing"),
  createData( 7,"Machine 3", 'Test Run',  '2.0.0',"1.0.0", "Production" ),
  createData( 8,"Machine 4", 'Development','2.2.0',"1.1.0","Testing"  ),
  createData( 9,"Machine 2", 'Production', '2.1.1', "1.2.1" ,"Testing"),
];
type Props = {
  filters : any[]
}
const DataTable:React.FC<Props>=(props) =>{
  const [filtersData,setFiltersData] = React.useState<any[]>(props.filters)
  const [filteredData,setFilteredData] = React.useState<any[]>(rows)
  React.useEffect(()=>{
    if(props.filters.length){
      console.log("props filters",props.filters)
      setFiltersData(props.filters)
    }
    setFilteredData(rows)
  },[props.filters])
  React.useEffect(()=>{
    // console.log("filtered data changes",filteredData)
    if(filtersData.length){
      let data  = rows
     
        if(filtersData.find(filter=>filter.name==='machine')){
          data = data.filter((row)=>row.machine===filtersData.find(filter=>filter.name==='machine').value)
        }
        if(filtersData.find(filter=>filter.name==='runType')){
          data = data.filter((row)=>row.runType===filtersData.find(filter=>filter.name==='runType').value)
        }
        if(filtersData.find(filter=>filter.name==='hardwareVersion')){
          data = data.filter((row)=>row.hardwareVersion===filtersData.find(filter=>filter.name==='hardwareVersion').value)
        }
        if(filtersData.find(filter=>filter.name==='softwareVersion')){
          data = data.filter((row)=>row.softwareVersion===filtersData.find(filter=>filter.name==='softwareVersion').value)
        }
        if(filtersData.find(filter=>filter.name==='machineUse')){
          data = data.filter((row)=>row.machineUse===filtersData.find(filter=>filter.name==='machineUse').value)
        }
   
      setFilteredData(data)
      // setFilteredData(rows.filter((row)=> 
      // filtersData.find(filter=>filter.name==='machine')?row.machine===filtersData.find(filter=>filter.name==='machine').value:true &&
      // filtersData.find(filter=>filter.name==='runType')?row.runType===filtersData.find(filter=>filter.name==='runType').value:true &&
      // filtersData.find(filter=>filter.name==='hardwareVersion')?row.hardwareVersion===filtersData.find(filter=>filter.name==='hardwareVersion').value:true &&
      // filtersData.find(filter=>filter.name==='softwareVersion')?row.softwareVersion===filtersData.find(filter=>filter.name==='softwareVersion').value:true &&
      // filtersData.find(filter=>filter.name==='machineUse')?row.machineUse===filtersData.find(filter=>filter.name==='machineUse').value:true
      // ))
    // filtersData.map((filter)=>{
    //   if(filter.name==='machine'){
    //     console.log('machine hit')
    //     setFilteredData(filteredData.filter((row)=>row.machine===filter.value))
    //   }
    //   if(filter.name==='runType'){
    //     console.log("runTpe hit")
    //     setFilteredData(filteredData.filter((row)=>row.runType===filter.value))
    //   }
    //   if(filter.name==='hardwareVersion'){
    //     setFilteredData(filteredData.filter((row)=>row.hardwareVersion===filter.value))
    //   }
    //   if(filter.name==='softwareVersion'){
    //     setFilteredData(filteredData.filter((row)=>row.softwareVersion===filter.value))
    //   }
    //   if(filter.name==='machineUse'){
    //     setFilteredData(filteredData.filter((row)=>row.machineUse===filter.value))
    //   }
    // })
  }
  },[filtersData])
  // React.useEffect(()=>{
  //   console.log("filtered Data : ---- ",filteredData)
  // },[filteredData])
  return (
    <TableContainer elevation={12} component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell'>Machine</TableCell>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell' align="right">Run type</TableCell>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell' align="right">Hardware version</TableCell>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell' align="right">Software version</TableCell>
            <TableCell sx={{fontWeight:"bold"}} className='TableHeaderCell' align="right">Machine use</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { !filtersData.length ? rows.map((row) => (
            <TableRow 
              key={row.id}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableBodyCell' component="th" scope="row">
                {row.machine}
              </TableCell>
              <TableCell className='TableBodyCell' align="right">{row.runType}</TableCell>
              <TableCell className='TableBodyCell' align="right">{row.hardwareVersion}</TableCell>
              <TableCell className='TableBodyCell' align="right">{row.softwareVersion}</TableCell>
              <TableCell className='TableBodyCell' align="right">{row.machineUse}</TableCell>
            </TableRow>
          )) : 
            filteredData.length ? filteredData.map((fdRow)=>(
            <TableRow 
              key={fdRow.id}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableBodyCell' component="th" scope="row">
                {fdRow.machine}
              </TableCell>
              <TableCell className='TableBodyCell' align="right">{fdRow.runType}</TableCell>
              <TableCell className='TableBodyCell' align="right">{fdRow.hardwareVersion}</TableCell>
              <TableCell className='TableBodyCell' align="right">{fdRow.softwareVersion}</TableCell>
              <TableCell className='TableBodyCell' align="right">{fdRow.machineUse}</TableCell>
            </TableRow>
          )):<h1>No data available for the filters</h1>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable