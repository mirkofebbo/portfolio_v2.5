import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import Grid from '@mui/material/Grid2';


import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import MetaInfo from "../components/MetaInfo";
import MediaGrid from "../components/MediaGrid";


const JobPage = ({ metadata }) => {
    const { ProjectSelection, ProjectIndex } = useParams();
    const projectUrl = metadata[ProjectSelection].list[ProjectIndex];
    const [data, setData] = useState(null);
    const projectPath = `/data/projects/${projectUrl}`;

    useEffect(() => {
        fetch(projectPath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log("data", data);
                setData(data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                return null;
            });
    }, [projectPath]);

    console.log(data);
    if (data === null) {
        return (
            <Box>
                <Typography variant="h1">Error: Project not found</Typography>
            </Box>
        );
    }

    return (
        <Box flexDirection="column" >
            <Title title={data.title} oneLiner={data.oneLiner} backgroundImg={data.heroImage} />
            { data.videoUrl !== null ? <video src={data.videoUrl} autoPlay loop muted controls={false} style={{ width: "100%", objectFit: "cover" }} /> : null}
            <Paragraph sections={data.section}/>

            <MediaGrid mediaList={data.mediaGallery} />

            <MetaInfo date={data.date} status={data.status} keywords={data.keywords} link={data.link} />
        </Box >
    );
}

export default JobPage;