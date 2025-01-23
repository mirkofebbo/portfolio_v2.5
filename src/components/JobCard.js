import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const JobCard = ({ data, projectPageUrl }) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', margin: 1 }}>
            {/* CardMedia with a fixed width for the image on the left */}
            <CardMedia
                component="img"
                sx={{ width: 160, objectFit: 'cover' }}
                image={data.heroImage}
                title={data.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title.replace(/_/g, " ")}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {data.oneLiner}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        component={Link}
                        to={projectPageUrl}>
                        Learn More
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
}

export default JobCard;
