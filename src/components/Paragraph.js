import { Box, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import NestedList from './NestedList';
import { useParams } from "react-router-dom";
import { isVideo } from '../helpers/Helpers';
import { Link } from 'react-router-dom';

export default function Paragraph({ sections }) {
    const { JobName } = useParams();

    const paragraphCard = sections.map((section, index) => {
        return (
            <Box margin={2} key={index}>
                <CardActionArea  component={Link} to={`/job/${JobName}/${index}`} >
                    <Card sx={{ display: 'flex' }}>
                        {section.media !== "" ? (
                            <CardMedia
                                component={isVideo(section.media) ? 'video' : 'img'}
                                sx={{ width: "250px", height: "auto" }}
                                image={section.media}
                            />
                        ) : null}
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ alignContent: 'center', justifyContent: 'center' }}>
                                <Typography align="left" variant="h5" component="h2">
                                    {section.subtitle}
                                </Typography>
                                <Typography align="left" variant="body1" >
                                    {section.text}
                                </Typography>
                                {"responsibilities" in section ?
                                    <NestedList responsibilities={section.responsibilities} />
                                    : null}
                            </CardContent>
                        </Box>
                    </Card>
                </CardActionArea>
            </Box>
        );
    });

    return <Box>{paragraphCard}</Box>;
}
