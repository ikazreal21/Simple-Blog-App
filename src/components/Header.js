import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}));

function Header() {
  const classes = useStyle();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="white"
        elevation={0}
        className={classes.appBar}>
        <ToolBar>
          <Typography variant="h6" color="inherit" noWrap>
            Simple Blog App
          </Typography>
        </ToolBar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
