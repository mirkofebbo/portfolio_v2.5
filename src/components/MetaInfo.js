import { Box, Typography, Card, CardContent, CardActions, CardMedia, Button } from '@mui/material';
import VideoCard from './VideoCard';
import KeywordTypography from './KeywordTypography';

export default function MetaInfo({ data }) {
    // send more details about the selected project
    // Status: Completed, In Progress, etc.
    // Link: is the project website 
    console.log(data.keywords)
    return (
        <Card sx={{ display: 'flex', margin: '1rem' }}>
            <CardMedia>
                <VideoCard videoUrl={data.videoUrl} />
            </CardMedia>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="body1" color="text.secondary">
                        {data.status} {data.date}
                    </Typography>
                    <KeywordTypography keywords = {data.keywords}/>
                    <Typography variant="h5" color="text.primary">
                        {data.oneLiner}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href={data.projectUrl} variant='url'>
                        Project Link
                    </Button>
                </CardActions>
            </Box>
        </Card>
    )

}