import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Project = (metadata) => {
    const { ProjectSelection, ProjectIndex } = useParams();
    const projectUrl = metadata.metadata[ProjectSelection].list[ProjectIndex];
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
        <ProjectCard data={data} />
    );
}

export default Project;