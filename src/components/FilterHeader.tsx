import FilterHeaderLeft from "./FilterHeaderLeft";
import FilterHeaderRight from "./FilterHeaderRight";
import "./FilterHeader.css"
import FilterMenu from "./FilterMenu";
import { useState } from "react";
import DataTable from "./DataTable";
export type FilterMenuProps = {
    setFilterMenu:(displayFilterMenu:boolean)=>void
}
const FilterHeader: React.FC = () => {
    const [filters,setFilters] = useState<any[]>([])
   
    const [displayFilterMenu,setDispalyfilterMenu] = useState(false)
    const handleFilterMenu =(displayFilterMenu:boolean)=>{
        setDispalyfilterMenu(displayFilterMenu)
    }
    const handleFilters=(filtersToBeApplied:any[])=>{
        setFilters(filtersToBeApplied)
    }
    const handleClearFilters=()=>{
        setFilters([])
    }
    return (  
        <div style={{background:"#ffffff",padding:"0 20px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <div className="FilterHeaderWrapper">
                <FilterHeaderLeft setFilterMenu={handleFilterMenu}/>
                <FilterHeaderRight/>
            </div>
            {
                displayFilterMenu && <>
                <FilterMenu handleFilters={handleFilters} handleClear={handleClearFilters}  /> 
                <DataTable filters={filters}/>
                
                <br/>
                </>
            }
            
            
        </div>
    );
}
 
export default FilterHeader;