import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
const FilterHeaderRight: React.FC = () => {
    const [age, setAge] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (  
        <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"space-evenly",gap:"8px"}}>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="range-label">Select Range</InputLabel>
                <Select
                labelId="range-label"
                id="range"
                value={age}
                onChange={handleChange}
                label="range"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <div style={{borderRight:"1px solid black",height:"40px"}}>&nbsp;</div>
            <ViewListIcon sx={{color:"gray"}} fontSize='large' />
            <ViewCompactIcon sx={{color:"gray"}} fontSize='large'/>
        </div>
    );
}
 
export default FilterHeaderRight;