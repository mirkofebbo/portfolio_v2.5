import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, CardActions, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const JobCard = ({ data, projectPageUrl }) => {

    return (
        <CardActionArea component={Link} to={projectPageUrl}>
            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', margin: 1, height: 240 }}>
                {/* CardMedia with a fixed width for the image on the left */}
                <CardMedia
                    component="img"
                    sx={{ maxWidth: 240, objectFit: 'cover' }}
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
                </Box>
            </Card>
        </CardActionArea>
    );
}

export default JobCard;
