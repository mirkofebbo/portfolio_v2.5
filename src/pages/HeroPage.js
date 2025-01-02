import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useLoadProjectJson } from '../hooks/useLoadProjectJson';
import ProjectCard from '../components/ProjectCard';

const HeroPage = (metadata) => {
    const { ProjectSelection } = useParams(null);
    const data = metadata.metadata[ProjectSelection];

    const [projectDataList, setProjectDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { loadProjectJson } = useLoadProjectJson();

    useEffect(() => {
        const loadProjectData = async () => {
            setLoading(true);
            const loadedData = await Promise.all(
                data.list.map(async (project) => {
                    const result = await loadProjectJson(project);
                    return result;
                })
            );
            console.log("loadedData", loadedData);
            setProjectDataList(loadedData);
            setLoading(false);
        };

        loadProjectData();
    }, [data]);

    if (loading) return <Box><Typography variant="h1">Loading...</Typography></Box>;
    if (!projectDataList.length || !ProjectSelection) return <Box><Typography variant="h1">Error: Project not found</Typography></Box>;

    const projectList = projectDataList.map((project, index) => {
        return (
            <Grid size={{ xs: 12, sm: 4 }}>
                <ProjectCard key={index} data={projectDataList[index]} />
            </Grid>
        );
    });

    return (
        <Box>
            <Grid container spacing={1}>
                {projectList}
            </Grid>
        </Box>
    );
};

export default HeroPage;