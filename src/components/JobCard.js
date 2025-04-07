import React from 'react';
import {
    Box, Typography, Card, CardContent, CardMedia,
    CardActionArea, Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import KeywordTypography from './KeywordTypography';

const JobCard = ({ data, projectPageUrl }) => {
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
                component="img"
                sx={{
                    width: { xs: '100%', sm: 240 },
                    height: { xs: 180, sm: '100%' },
                    objectFit: 'cover'
                }}
                image={data.heroImage}
                title={data.title}
            />
            <CardActionArea component={Link} to={projectPageUrl}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%'
                    }}
                >
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
