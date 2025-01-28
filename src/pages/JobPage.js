import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";

import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import MetaInfo from "../components/MetaInfo";
import MediaGrid from "../components/MediaGrid";
import JobCard from "../components/JobCard";

const JobPage = ({ metadata }) => {
    const { JobName } = useParams();
    const [data, setData] = useState(null);

    let projectUrl = ""
    for (let i = 0; i < metadata["job"].list.length; i++) {
        if (metadata["job"].list[i].title === JobName) {
            projectUrl = metadata["job"].list[i].url;
            break;
        }
    }

    const projectPath = `/data/projects/${projectUrl}`;

    console.log("JobPage", JobName, projectUrl, projectPath);
    useEffect(() => {
        fetch(projectPath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                return null;
            });
    }, [projectPath]);


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
            {data.videoUrl !== null ? <video src={data.videoUrl} autoPlay loop muted controls={false} style={{ width: "100%", objectFit: "cover" }} /> : null}
            <Paragraph sections={data.section} />
        </Box>
    );

}

export default JobPage;