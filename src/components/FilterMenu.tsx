import React, { useEffect } from 'react';
 import InputLabel from '@mui/material/InputLabel';
 import MenuItem from '@mui/material/MenuItem';
 import FormControl from '@mui/material/FormControl';
 import Select, { SelectChangeEvent } from '@mui/material/Select';
 import { useState } from 'react';
import { Close } from '@mui/icons-material';
type selectedValuesType = {
    name?: any,
    value?: any
}
const FilterMenu: React.FC<selectedValuesType> = () => {
    
    const [selectedValues,setSelectedValues]=useState<(selectedValuesType | undefined)[]>([])
    const [machine, setMachine] = useState('');
    const handleMachineChange = (event: SelectChangeEvent) => {
        setMachine(event.target.value);
        const isMachineExist = selectedValues.filter((obj)=>obj?.name==='machine').length
        if(isMachineExist){
            selectedValues.map((obj)=>{
                if(obj?.name==='machine'){
                    setSelectedValues((prev)=>{

                        return [...(prev.filter((prevObj)=>prevObj?.name!=='machine')),{...obj,value:event.target.value}]
                })
                }
            })
        }
        else{
            setSelectedValues([...selectedValues,event.target])
        }
    }
    const [runType, setRunType] = useState('');
    const handleRunTypeChange = (event: SelectChangeEvent) => {
        setRunType(event.target.value);
        const isRunTypeExist = selectedValues.filter((obj)=>obj?.name==='runType').length
        if(isRunTypeExist){
            selectedValues.map((obj)=>{
                if(obj?.name==='runType'){
                    setSelectedValues((prev)=>{
                        return [...(prev.filter((prevObj)=>prevObj?.name!=='runType')),{...obj,value:event.target.value}]
                    })
                }
            })
        }
        else{
            setSelectedValues([...selectedValues,event.target])
        }
    };
    const [hardwareVersion, setHardwareVersion] = useState('');
    const handleHardwareVersionChange = (event: SelectChangeEvent) => {
        setHardwareVersion(event.target.value);
        const isHardwareVersionExist = selectedValues.filter((obj)=>obj?.name==='hardwareVersion').length
        if(isHardwareVersionExist){
            selectedValues.map((obj)=>{
                if(obj?.name==='hardwareVersion'){
                    setSelectedValues((prev)=>{
                        return [...(prev.filter((prevObj)=>prevObj?.name!=='hardwareVersion')),{...obj,value:event.target.value}]
                    })
                }
            })
        }
        else{
            setSelectedValues([...selectedValues,event.target])
        }
    };
    const [softwareVersion, setSoftwareVersion] = useState('');
    const handleSoftwareVersionChange = (event: SelectChangeEvent) => {
        setSoftwareVersion(event.target.value);
        const isSoftwareVersionExist = selectedValues.filter((obj)=>obj?.name==='softwareVersion').length
        if(isSoftwareVersionExist){
            selectedValues.map((obj)=>{
                if(obj?.name==='softwareVersion'){
                    setSelectedValues((prev)=>{
                        return [...(prev.filter((prevObj)=>prevObj?.name!=='softwareVersion')),{...obj,value:event.target.value}]
                    })
                }
            })
        }
        else{
            setSelectedValues([...selectedValues,event.target])
        }
        
    };
    const [machineUse, setMachineUse] = useState('');
    const handleMachineUseChange = (event: SelectChangeEvent) => {
        setMachineUse(event.target.value);
        const isMachineUseExist = selectedValues.filter((obj)=>obj?.name==='machineUse').length
        if(isMachineUseExist){
            selectedValues.map((obj)=>{
                if(obj?.name==='machineUse'){
                    setSelectedValues((prev)=>{
                        return [...(prev.filter((prevObj)=>prevObj?.name!=='machineUse')),{...obj,value:event.target.value}]
                    })
                }
            })
        }
        else{
            setSelectedValues([...selectedValues,event.target])
        }
        
    };
   
    // useEffect(()=>{
    //     if(machine){
    //         console.log(selectedValues)
    //         // setSelectedValues(prevSelectedOptions => {...prevSelectedOptions})
    //     }
    // },[machine])
    // useEffect(()=>{
    //     if(runType){
    //         console.log(runType)
    //         // setSelectedValues(prevSelectedOptions => [...prevSelectedOptions,runType])
    //     }    
    // },[runType])
    // useEffect(()=>{
    //     if(hardwareVersion){
    //         console.log(hardwareVersion)
    //         // setSelectedValues(prevSelectedOptions => [...prevSelectedOptions, hardwareVersion])
    //     }
    // },[hardwareVersion])
    // useEffect(()=>{
    //     if(softwareVersion)
    //     {
    //         console.log(softwareVersion)
    //         // setSelectedValues(prevSelectedOptions => [...prevSelectedOptions, softwareVersion])
    //     }   
    // },[softwareVersion])
    // useEffect(()=>{
    //     if(machineUse){
    //         console.log(machineUse)
    //         // setSelectedValues(prevSelectedOptions => [...prevSelectedOptions, machineUse])
    //     }
    // },[machineUse])
    useEffect(()=>{
        if(selectedValues){
            console.log(selectedValues)    
        }
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
                value={machine}
                onChange={handleMachineChange}
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
                value={runType}
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
                value={hardwareVersion}
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
                value={softwareVersion}
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
                value={machineUse}
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