import React from "react";
import { Box, Container, Grid, Typography, IconButton, useTheme } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              &copy; {new Date().getFullYear()} Mirko Febbo all rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              <IconButton component="a" href="https://www.linkedin.com/in/mirko-febbo-843982156/" target="_blank">
                <LinkedInIcon sx={{ color: theme.palette.text.primary }} />
              </IconButton>
              <IconButton component="a" href="https://www.instagram.com/mirko.febbo/" target="_blank">
                <InstagramIcon sx={{ color: theme.palette.text.primary }} />
              </IconButton>
              <IconButton component="a" href="https://github.com/mirkofebbo" target="_blank">
                <GitHubIcon sx={{ color: theme.palette.text.primary }} />
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>

  );
};

export default Footer;
