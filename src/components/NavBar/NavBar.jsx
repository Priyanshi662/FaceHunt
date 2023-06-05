import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import { Typography } from "@mui/material";
const NavBar = ({isSignedIn}) => {
    return (
        <AppBar position="static">
            isSignedIn==='true'?
              <div>
                <Typography variant="h6">FaceHunt</Typography>
                <Link to="/signin"><Typography variant="h6">Sign In</Typography></Link>
                <Link to="/register"><Typography variant="h6">Register</Typography></Link>
              </div>
            :
                <div>
                    <Link to="/signout"><Typography variant="h6">Signout</Typography></Link>
                </div>
        </AppBar>
    );
}
export default NavBar;