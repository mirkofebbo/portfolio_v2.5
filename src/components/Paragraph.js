import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { isVideo } from '../helpers/Helpers';

export default function Paragraph({ sections }) {
    const paragraphCard = sections.map((section, index) => {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" margin={2}>
                <Card sx={{ maxWidth: "95%", display: 'flex' }}>
                    {section.media != ""?
                        <CardMedia component={isVideo(section.media) ? 'video' : 'img'} sx={{ width: "250px", height: "auto" }} image={section.media} />
                        : null
                    }
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', alignContent: 'center', justifyContent: 'center' }}>
                            <Typography align='left' variant="h5" component="h2">
                                {section.subtitle}
                            </Typography>
                            <Typography align='left' variant="body1" color="text.secondary">
                                {section.text}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Box>
        )

    });

    return (
        <Box>
            {paragraphCard}
        </Box>
    );

}