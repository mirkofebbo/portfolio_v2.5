import { Box, Typography, Card, CardContent, CardActions, CardMedia, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import VideoCard from './VideoCard';
import KeywordTypography from './KeywordTypography';

export default function MetaInfo({ data }) {
    // send more details about the selected project
    // Status: Completed, In Progress, etc.
    // Link: is the project website 
    const keywordTypography = () => {
        return (
            <Box mt={2}>
                <Grid container spacing={1} flexWrap="wrap">
                    {data.keywords.map((keyword, index) => (
                        <Grid item key={index}>
                            <Typography variant="body3">
                                {keyword.toUpperCase()}
                                {index !== data.keywords.length - 1 ? ' |' : ''}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }



    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                width: '100%',
                minHeight: 240,
                marginTop: '1rem'
            }}
        >
            <CardMedia
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'stretch',
                    p: 2
                }}>
                <VideoCard videoUrl={data.videoUrl} />
            </CardMedia>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                }}
            >
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="body1" color="text.secondary">
                        {data.date}
                    </Typography>
                    <Typography variant="h5" color="text.primary">
                        Client: {data.client}
                    </Typography>
                    <Typography variant={'body2'}>
                        {data.description}
                    </Typography>
                    <KeywordTypography keywords={data.keywords} />
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