import { Card, CardContent } from "@mui/material";

export default function VideoCard({ videoUrl }) {
    if (!videoUrl) return <>Invalid video URL</>;

    // Extract video ID from the YouTube URL
    const getYouTubeEmbedUrl = (url) => {
        const match = url.match(
            /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
        );
        return match ? `https://www.youtube.com/embed/${match[1]}` : null;
    };

    const embedUrl = getYouTubeEmbedUrl(videoUrl);
    if (!embedUrl) return <>Invalid YouTube link</>;

    return (
        <Card sx={{ width: "100%", height: "450px" }}>
            <CardContent>
            <iframe width="100%" height="315" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </CardContent>
        </Card>
    );
}
