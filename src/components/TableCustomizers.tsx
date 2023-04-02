import { Filter, FilterList, MenuOutlined, Search } from "@mui/icons-material";
import { Input, TextField } from "@mui/material";
import { Fragment } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import "./TableCustomizers.css"


interface Props {
    
}
 
const TableCustomizers: React.FC = () => {
    return ( 
        <Fragment>
            <div>
                <div className="flex">
                  <MenuOutlined/>
                  
                  <h2>Filter Runs</h2>
                  <span>|</span>
                  <TextField
                            placeholder="Search"
                            sx={{
                                '& input': {
                                borderBottom: '2px solid grey',
                                fontSize: 16,
                                paddingRight: '30px',
                                },
                                '& .MuiInputAdornment-positionEnd': {
                                position: 'absolute',
                                right: 0,
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon style={{color:"grey"}} />
                                </InputAdornment>
                                ),
                            }}
                    />

                </div>
                <div>
                  
                </div>
            </div>
            <div style={{margin:"auto",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
                <MenuOutlined/>
                <FilterList/>
                <Input/>
                <Search/>
            </div>
        </Fragment>

        
    );
}
 
export default TableCustomizers;