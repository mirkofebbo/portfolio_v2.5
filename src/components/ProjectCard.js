import React from 'react';
import { Typography, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectCard = ({ data, projectPageUrl }) => {

    return (
        <Card sx={{ maxWidth: 600, margin: 1 }}>
            <CardMedia
                sx={{ height: 240 }}
                image={data.heroImage}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title.replace(/_/g, " ")}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        height: '200px',
                        overflowY: "auto", 
                        overflowX: "hidden",
                        wordWrap: "break-word"
                    }}
                >
                    {data.oneLiner}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant='big_orange'
                    component={Link}
                    to={projectPageUrl}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;