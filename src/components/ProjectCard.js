import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';

const ProjectCard = (data) => {
    console.log("data   ", data);

    data = data.data;

    return (
        <Card sx={{ maxWidth: 400, margin: 2 }}>
            <CardMedia
                sx={{ height: 140 }}
                image= {data.mediaUrl[0]}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title.replace(/_/g, " ")}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {data.oneLiner}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;