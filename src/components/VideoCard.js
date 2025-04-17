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

    // Extract video ID from the Vimeo URL
    const getVimeoEmbedUrl = (url) => {
        const match = url.match(/vimeo\.com\/(\d+)/);
        return match ? `https://player.vimeo.com/video/${match[1]}` : null;
    };

    const isYouTubeUrl = (url) => {
        return /(?:youtube\.com|youtu\.be)/.test(url);
    };

    const isVimeoUrl = (url) => {
        return /vimeo\.com/.test(url);
    };

    const embedUrl = isYouTubeUrl(videoUrl)
        ? getYouTubeEmbedUrl(videoUrl)
        : isVimeoUrl(videoUrl)
        ? getVimeoEmbedUrl(videoUrl)
        : null;

    if ((isYouTubeUrl(videoUrl) || isVimeoUrl(videoUrl)) && !embedUrl)
        return <>Invalid video link</>;

    return (
        <Box sx={{ height: "450px", width: "100%" }}>
            {isYouTubeUrl(videoUrl) || isVimeoUrl(videoUrl) ? (
                <iframe
                    width="100%"
                    height="450px"
                    src={embedUrl}
                    title="Video player"
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            ) : (
                <video
                    width="100%"
                    height="450px"
                    controls
                    src={videoUrl}
                    title="Video player"
                >
                    Your browser does not support the video tag.
                </video>
            )}
        </Box>
    );
}