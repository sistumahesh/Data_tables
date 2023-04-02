import React, { useEffect } from 'react';
 import InputLabel from '@mui/material/InputLabel';
 import MenuItem from '@mui/material/MenuItem';
 import FormControl from '@mui/material/FormControl';
 import Select, { SelectChangeEvent } from '@mui/material/Select';
 import { useState } from 'react';
import { Close } from '@mui/icons-material';
const FilterMenu: React.FC = () => {
    const [selectedValues,setSelectedValues]=useState<string[]>([])

    const [machine, setMachine] = useState({});
    const handleMachineChange = (event: SelectChangeEvent) => {
        console.log(event.target)
        setMachine(event.target);
    };
    const [runType, setRunType] = useState({});
    const handleRunTypeChange = (event: SelectChangeEvent) => {
        setRunType(event.target);
        
    };
    const [hardwareVersion, setHardwareVersion] = useState({});
    const handleHardwareVersionChange = (event: SelectChangeEvent) => {
        setHardwareVersion(event.target);
        
    };
    const [softwareVersion, setSoftwareVersion] = useState({});
    const handleSoftwareVersionChange = (event: SelectChangeEvent) => {
        setSoftwareVersion(event.target);
        
    };
    const [machineUse, setMachineUse] = useState({});
    const handleMachineUseChange = (event: SelectChangeEvent) => {
        setMachineUse(event.target);
        
    };
    useEffect(()=>{
        if(machine){
            console.log(machine)
            // setSelectedValues(prevSelectedOptions => {...prevSelectedOptions})
        }
    },[machine])
    useEffect(()=>{
        if(runType){
            console.log(runType)
            // setSelectedValues(prevSelectedOptions => [...prevSelectedOptions,runType])
        }    
    },[runType])
    useEffect(()=>{
        if(hardwareVersion){
            console.log(hardwareVersion)
            // setSelectedValues(prevSelectedOptions => [...prevSelectedOptions, hardwareVersion])
        }
    },[hardwareVersion])
    useEffect(()=>{
        if(softwareVersion)
        {
            console.log(softwareVersion)
            // setSelectedValues(prevSelectedOptions => [...prevSelectedOptions, softwareVersion])
        }   
    },[softwareVersion])
    useEffect(()=>{
        if(machineUse){
            console.log(machineUse)
            // setSelectedValues(prevSelectedOptions => [...prevSelectedOptions, machineUse])
        }
    },[machineUse])
    useEffect(()=>{
            console.log(selectedValues)    
    },[selectedValues])

    return ( 
        <div style={{display:"flex",flexDirection:"row",padding:"20px 0",alignItems:"center",justifyContent:"space-evenly"}}>
            <FormControl style={{background:"white"}}
             variant="standard" sx={{ minWidth: 160 }}>
                <InputLabel   id="machine-label">Machine</InputLabel>
                <Select
                sx={{padding:"0 10px"}}
                labelId="machine-label"
                id="machine"
                name='machine'
                value={machine.value}
                onChange={(e)=>handleMachineChange(e)}
                label="machine"
                >
                <MenuItem value={'Ten'}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{background:"white"}}  variant="standard" sx={{ minWidth: 160 }}>
                <InputLabel id="runtype-label">Run type</InputLabel>
                <Select
                sx={{padding:"0 10px"}}
                labelId="runtype-label"
                id="runtype"
                name='runType'
                value={runType.value}
                onChange={handleRunTypeChange}
                label="runtype"
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{background:"white"}} variant="standard" sx={{ minWidth: 160 }}>
                <InputLabel id="hardwareVersion-label">Hardware version</InputLabel>
                <Select
                sx={{padding:"0 10px"}}
                labelId="hardwareVersion-label"
                id="hardwareVersion"
                name='hardwareVersion'
                value={hardwareVersion.value}
                onChange={handleHardwareVersionChange}
                label="hardwareVersion"
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{background:"white"}} variant="standard" sx={{ minWidth: 160 }}>
                <InputLabel id="softwareVersion-label">Software version</InputLabel>
                <Select
                sx={{padding:"0 10px"}}
                labelId="softwareVersion-label"
                id="softwareVersion"
                name='softwareVersion'
                value={softwareVersion.value}
                onChange={handleSoftwareVersionChange}
                label="softwareVersion"
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{background:"white"}} variant="standard" sx={{ minWidth: 160 }}>
                <InputLabel id="machineUse-label">Machine use</InputLabel>
                <Select
                sx={{padding:"0 10px"}}
                labelId="machineUse-label"
                id="machineUse"
                name='machineUse'
                value={machineUse.value}
                onChange={handleMachineUseChange}
                label="machineUse"
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            
        </div>
     );
}
 
export default FilterMenu;