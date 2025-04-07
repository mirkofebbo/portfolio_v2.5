import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import MetaInfo from "../components/MetaInfo";
import MediaGrid from "../components/MediaGrid";
// import VideoCard from "../components/VideoCard";

import { useLoadProjectJson } from '../hooks/useLoadProjectJson';

const ProjectPage = ({ metadata }) => {

    const { role, ProjectIndex, SubProjectIndex } = useParams();
    const { loadProjectJson } = useLoadProjectJson();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    let projectUrl = "";
    if (SubProjectIndex >= 0) projectUrl = metadata[role].list[ProjectIndex].list[SubProjectIndex];
    else projectUrl = metadata[role].list[ProjectIndex];

    useEffect(() => {
        const loadProjectData = async () => {
            setLoading(true);

            let loadedData = [];

            loadedData = await loadProjectJson(projectUrl);
            setData(loadedData);
            setLoading(false);
        };

        loadProjectData();
    }, );

    if (loading) return <Box><Typography variant="h1">Loading...</Typography></Box>;
    

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
            {/* <VideoCard videoUrl={data.videoUrl}/> */}
            <MetaInfo data={data} />

            <Paragraph sections={data.section} />
            <MediaGrid mediaList={data.mediaGallery} />
        </Box >
    );

}

export default ProjectPage;