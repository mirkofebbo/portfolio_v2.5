import React from 'react';
import {
    Box, Typography, Card, CardContent, CardMedia,
    CardActionArea, Divider
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import KeywordTypography from './KeywordTypography';

const JobCard = ({ data, projectPageUrl }) => {
    return (
        <Card>
            <CardMedia component="img" image={data.heroImage} title={data.title} />
            <CardActionArea component={Link} to={projectPageUrl}>
                <CardContent>
                    <Box>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title.replace(/_/g, ' ')}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'primary.secondary' }}>
                            {data.employer}
                        </Typography>
                        <Divider sx={{ marginTop: '0.5rem' }} />
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                marginTop: '0.5rem',
                                maxHeight: 95,
                                overflowY: 'auto'
                            }}
                        >
                            {data.oneLiner}
                        </Typography>
                    </Box>
                    <KeywordTypography keywords={data.keywords}/>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default JobCard;
