import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

const JobCard = ({ data, projectPageUrl }) => {
    console.log(projectPageUrl);
    return (
        <CardActionArea component={Link} to={projectPageUrl}>
            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', margin: 1, height: 240 }}>
                {/* image on the left */}
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
                        <Typography variant="body2" sx={{ color: 'text.secondary', height: "120px" }}>
                            {data.oneLiner}
                        </Typography>
                        <Grid container margin={"auto"}>
                            {data.keywords.map((keyword, index) => {
                                return (
                                    <Grid item lg={6} xl={4} md={4} xs={6}>
                                        <Typography variant="body3" >
                                            &nbsp;{keyword} {index === data.keywords.lenght - 1 ? '' : '|'}
                                        </Typography>
                                    </Grid>
                                )
                            })
                            }
                        </Grid>
                    </CardContent>
                </Box>
            </Card>
        </CardActionArea>
    );
}

export default JobCard;
