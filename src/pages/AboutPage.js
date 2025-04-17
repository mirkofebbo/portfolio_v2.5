import { Box, Typography, } from '@mui/material';


const About = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography variant="h1">About</Typography>
            <Typography variant="h2">This is the about page</Typography>
        </Box>
    );
}

export default About;