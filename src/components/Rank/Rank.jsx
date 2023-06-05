import React from "react";
import { Typography } from "@mui/material";
const Rank = ({name, entries}) => { 
    return (
        <div>
            <Typography sx={{marginTop:"35px",color:"#FFFFFF", fontSize:"25px"}}>
                {`${name}, your entry count is...`}
                </Typography>
            <Typography sx={{marginBottom:"25px",color:"#FFFFFF",fontSize:"25px"}}>{entries}</Typography>
        </div>
    );
}
export default Rank;