import { Close, Menu,Search} from '@mui/icons-material'
import {Input} from '@mui/material'
import { useEffect, useState } from 'react'
import { FilterMenuProps } from './FilterHeader';
const FilterHeaderLeft: React.FC<FilterMenuProps> = (props) => {
    const [displayFilterMenu,setDisplayFilterMenu] = useState(false);
    const hanldeFilterMenu =()=>{
        setDisplayFilterMenu(!displayFilterMenu)
    }
    useEffect(()=>{
        props.setFilterMenu(displayFilterMenu)
    },[displayFilterMenu])
    return (
        <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"space-evenly"}}>
            {
                !displayFilterMenu && 
                <div style={{cursor:"pointer"}} onClick={hanldeFilterMenu}>
                <Menu sx={{color:"gray"}} fontSize={'large'} />
                </div>
            }
            {
                displayFilterMenu && 
                <div style={{cursor:"pointer"}} onClick={hanldeFilterMenu}>
                    <Close sx={{color:"gray"}} fontSize={'large'} />
                </div>
            }
            <span style={{borderRight :"1px solid black",fontWeight:"400",margin:"0 10px",padding:"0 10px",fontSize:"24px",color:"rgb(23, 121, 186)"}}>Filter Runs</span>
            <Input placeholder='Search by Runs'/>
            <Search  fontSize={'large'} />
        </div>
    );
}
 
export default FilterHeaderLeft;