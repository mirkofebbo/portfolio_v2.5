import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function KeywordTypography({ keywords })  {
    console.log(keywords)
    return (
        <Box mt={2}>
            <Grid container spacing={1} flexWrap="wrap">
                {keywords.map((keyword, index) => (
                    <Grid item key={index}>
                        <Typography variant="body3">
                            {keyword.toUpperCase()}
                            {index !== keywords.length - 1 ? ' |' : ''}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}