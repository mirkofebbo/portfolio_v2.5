import { Box, Typography } from '@mui/material';

export default function Title({ title, oneLiner, backgroundImg }) {
    // header section of the page
    return (
        <Box sx={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover",  backgroundPosition: "center right",  backgroundRepeat: "no-repeat", height: "50vh", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
            <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.90)', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h2" align='center' >{title.replace(/_/g, " ")}</Typography>
                <Typography variant="h5" align='center' width={"90%"}>{oneLiner}</Typography>
            </Box>

        </Box>
    );
}