import { Box } from "@mui/material";

export default function VideoCard({ videoUrl }) {
    if (!videoUrl) return <>Invalid video URL</>;

    // Extract video ID from the YouTube URL
    const getYouTubeEmbedUrl = (url) => {
        const match = url.match(
            /(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([^"&?/\\s]{11})/
        );
        return match ? `https://www.youtube.com/embed/${match[1]}` : null;
    };

    const embedUrl = getYouTubeEmbedUrl(videoUrl);  
    if (!embedUrl) return <>Invalid YouTube link</>;

    return (
        <Box sx={{ height: "450px", width: "780px" }}>
            {/* <iframe width="100%" height="450px" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </Box>
    );
}
