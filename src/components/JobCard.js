import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, CardActionArea, CardActions, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

const JobCard = ({ data, projectPageUrl }) => {
    console.log(projectPageUrl);
    return (
        <Card sx={{ display: "flex", width: "100%", height: 240, marginTop: "1rem" }}>
            <CardMedia
                component="img"
                sx={{ maxWidth: 240, objectFit: 'cover' }}
                image={data.heroImage}
                title={data.title}
            />
            <CardActionArea component={Link} to={projectPageUrl}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title.replace(/_/g, " ")}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "primary.secondary" }}>
                        {data.employer}
                    </Typography>
                    <Divider sx={{ marginTop: "0.5rem" }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', height: "50%", overflow: "scroll" }}>
                        {data.oneLiner}
                    </Typography>
                    <Box position="absolute" bottom={0}>
                        <Grid container ml={0}>
                            {data.keywords.map((keyword, index) => {
                                return (
                                    <Grid item key={index}>
                                        <Typography variant="body3" >
                                            &nbsp;{keyword} {index === data.keywords.length - 1 ? '' : '|'}
                                        </Typography>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}

export default JobCard;
