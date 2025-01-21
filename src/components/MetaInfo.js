import { Box, Typography, Card, CardContent, Button } from '@mui/material';

export default function MetaInfo({ date, status, keywords, link }) {
    // send more details about the selected project
    // Status: Completed, In Progress, etc.
    // Link: is the project website 
    const keywordTypography = keywords.map((keyword, index) => {
        return (
            <Button key={index} variant="keywords">
                {keyword}
            </Button>
        )
    });

    return (
        <Box padding={"0 5%"}>
            {/* <Typography variant="bodi1" component="h2">
                            {date}
                        </Typography> */}
            <Typography variant="body1" color="text.secondary">
                {status} {date}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {link}
            </Typography>
            {keywordTypography}
        </Box>
    )

}