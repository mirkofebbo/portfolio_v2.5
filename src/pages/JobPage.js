import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";

import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import { useLoadProjectJson } from '../hooks/useLoadProjectJson';

const JobPage = ({ metadata }) => {
    const { role, ProjectIndex } = useParams();
    const { loadProjectJson } = useLoadProjectJson();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    let projectUrl = metadata[role].list[ProjectIndex].url;
    console.log("JOB PAGE")
    useEffect(() => {
        const loadProjectData = async () => {
            setLoading(true);

            let loadedData = [];

            loadedData = await loadProjectJson(projectUrl);
            setData(loadedData);
            setLoading(false);
        };

        loadProjectData();
    }, []);

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
            {data.videoUrl !== "" ? <video src={data.videoUrl} autoPlay loop muted controls={false} style={{ width: "100%", objectFit: "cover" }} /> : null}
            <Paragraph sections={data.section} />
        </Box>
    );

}

export default JobPage;