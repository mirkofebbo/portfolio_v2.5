import React from "react";
import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

// https://mui.com/material-ui/react-app-bar/

const Navbar = (metadata) => {
  const data = metadata.metadata;
  const projectType = [];
  Object.keys(data).forEach((key, index) => {
    //https://stackoverflow.com/questions/44561037/loop-in-return-statement-of-a-component-in-react-js

    if (data[key].hidden) return;
    projectType.push(
      <Button
        key={index}
        edge="start"
        variant="navbar"
        sx={{ flexGrow: 1 }}
        component={Link}
        to={`/${key}`}
      >
        {key}
      </Button>
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            edge="start"
            sx={{ mr: 2 }}
            component={Link}
          >
            <Typography variant="h3">
              Mirko Febbo
            </Typography>
          </Button>

          {projectType}
          <Button color="inherit">about </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
