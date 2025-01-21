import { Box, ImageList, ImageListItem } from '@mui/material';
import { isVideo } from '../helpers/Helpers';

const MediaGrid = ({ mediaList }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" margin={2}>
            <ImageList sx={{ width: "90%", height: "auto" }} cols={2} rowHeight={"auto"}>
                {mediaList.map((item, index) => (
                    <ImageListItem key={index}>
                        {isVideo(item) ? (
                            <video
                                src={item}
                                autoPlay
                                loop
                                muted
                                controls={false}
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                        ) : (
                            <img
                                src={item}
                                alt={`media-${index}`}
                                loading="lazy"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                        )}
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default MediaGrid;
