import React, { useEffect } from 'react';
 import InputLabel from '@mui/material/InputLabel';
 import MenuItem from '@mui/material/MenuItem';
 import FormControl from '@mui/material/FormControl';
 import Select, { SelectChangeEvent } from '@mui/material/Select';
 import { useState } from 'react';
import {  Clear, ClearAll, FilterAlt} from '@mui/icons-material';
import { Button } from '@mui/material';
type selectedValuesType = {
    name?: any,
    value?: any
}
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

type DropDownType = {
    name?: string,
    values?: any[]
}
type Props = {
    handleFilters : (filtersToBeApplied:any[])=>void
    handleClear : ()=>void
}
const FilterMenu: React.FC<Props> = (props) => {
    const [dropDownValues,setDropDownValues] = useState<(DropDownType | undefined)[]>([
        {
            name : 'machine',
            values : []
        },
        {
            name : 'runType',
            values : []
        },
        {
            name : 'hardwareVersion',
            values : []
        },
        {
            name : 'softwareVersion',
            values : []
        },
        {
            name : 'machineUse',
            values : []
        }
    ])
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

   useEffect(()=>{
        rows.map((row)=>{
            setDropDownValues((prev)=>[...(
                prev.map((prevObj)=>{
                    if(prevObj?.name==='machine'){
                        if(!prevObj.values?.includes(row.machine)){
                            return {...prevObj,values:[...prevObj.values as any[],row.machine]}
                        }
                        return {...prevObj,values:[...prevObj.values as any[]]}
                    }
                    else if(prevObj?.name==='runType'){
                        if(!prevObj.values?.includes(row.runType)){
                            return {...prevObj,values:[...prevObj.values as any[],row.runType]}
                        }
                        return {...prevObj,values:[...prevObj.values as any[]]}
                    }
                    else if(prevObj?.name==='hardwareVersion'){
                        if(!prevObj.values?.includes(row.hardwareVersion)){
                            return {...prevObj,values:[...prevObj.values as any[],row.hardwareVersion]}
                        }
                        return {...prevObj,values:[...prevObj.values as any[]]}
                    }
                    else if(prevObj?.name==='softwareVersion'){
                        if(!prevObj.values?.includes(row.softwareVersion)){
                            return {...prevObj,values:[...prevObj.values as any[],row.softwareVersion]}
                        }
                        return {...prevObj,values:[...prevObj.values as any[]]}
                    }
                    else if(prevObj?.name==='machineUse'){
                        if(!prevObj.values?.includes(row.machineUse)){
                            return {...prevObj,values:[...prevObj.values as any[],row.machineUse]}
                        }
                        return {...prevObj,values:[...prevObj.values as any[]]}
                    }
                })
            )])
        })
   },[])
   useEffect(()=>{
        console.log(dropDownValues)
   },[dropDownValues])
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
    const handleApplyFilter=()=>{
        console.log(selectedValues)
        props.handleFilters(selectedValues)
    }
    const handleClearFilter=()=>{
        setMachine('')
        setRunType('')
        setHardwareVersion('')
        setSoftwareVersion('')
        setMachineUse('')
        props.handleClear()
    }
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
                {
                    dropDownValues.map((dValues,index)=>{
                            if(dValues?.name==='machine'){
                                return dValues?.values?.map((machineValue)=><MenuItem value={machineValue} key={machineValue}>{machineValue}</MenuItem>)
                            }
                    })
                }
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
                {
                    dropDownValues.map((dValues,index)=>{
                            if(dValues?.name==='runType'){
                                return dValues?.values?.map((runTypeValue)=><MenuItem value={runTypeValue} key={runTypeValue}>{runTypeValue}</MenuItem>)
                            }
                    })
                }
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
                {
                    dropDownValues.map((dValues,index)=>{
                            if(dValues?.name==='hardwareVersion'){
                                return dValues?.values?.map((hardwareVersionValue)=><MenuItem value={hardwareVersionValue} key={hardwareVersionValue}>{hardwareVersionValue}</MenuItem>)
                            }
                    })
                }
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
                {
                    dropDownValues.map((dValues,index)=>{
                            if(dValues?.name==='softwareVersion'){
                                return dValues?.values?.map((softwareVersionValue)=><MenuItem value={softwareVersionValue} key={softwareVersionValue}>{softwareVersionValue}</MenuItem>)
                            }
                    })
                }
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
                {
                    dropDownValues.map((dValues,index)=>{
                            if(dValues?.name==='machineUse'){
                                return dValues?.values?.map((machineUseValue)=><MenuItem value={machineUseValue} key={machineUseValue}>{machineUseValue}</MenuItem>)
                            }
                    })
                }
                </Select>

            </FormControl>
            <Button variant='contained' size="small" onClick={handleApplyFilter} startIcon={<FilterAlt/>}>Apply Filters</Button>
            <Button variant="contained" size="small"  onClick={handleClearFilter} color="secondary" startIcon={<ClearAll/>}>Clear Filters</Button>

        </div>

     );

}

 

export default FilterMenu;