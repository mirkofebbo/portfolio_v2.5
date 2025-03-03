import { Box, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import NestedList from './NestedList';
import { useParams, Link } from "react-router-dom";
import { isVideo } from '../helpers/Helpers';

export default function Paragraph({ sections }) {
    const { ProjectIndex } = useParams();

    const renderCard = (section, index) => (
        <Card sx={{ display: 'flex' }}>
            {section.media && (
                <CardMedia
                    component={isVideo(section.media) ? 'video' : 'img'}
                    sx={{ width: "250px", height: "auto" }}
                    image={section.media}
                />
            )}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ alignContent: 'center', justifyContent: 'center' }}>
                    <Typography align="left" variant="h5" component="h2">
                        {section.subtitle}
                    </Typography>
                    <Typography align="left" variant="body1">
                        {section.text}
                    </Typography>
                    {section.responsibilities && <NestedList responsibilities={section.responsibilities} />}
                </CardContent>
            </Box>
        </Card>
    );

    return (
        <Box>
            {sections.map((section, index) => (
                <Box margin={2} key={index}>
                    {section.url ? (
                        <CardActionArea component={Link} to={`/job/${ProjectIndex}/${index}`}>
                            {renderCard(section, index)}
                        </CardActionArea>
                    ) : (
                        renderCard(section, index)
                    )}
                </Box>
            ))}
        </Box>
    );
}
