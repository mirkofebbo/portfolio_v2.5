import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useLoadProjectJson } from '../hooks/useLoadProjectJson';
import ProjectCard from '../components/ProjectCard';
import JobCard from '../components/JobCard';

const HeroPage = ({ metadata }) => {
    const { ProjectSelection } = useParams(null);
    const data = metadata[ProjectSelection];

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
            setProjectDataList(loadedData);
            setLoading(false);
        };

        loadProjectData();
    }, [data]);

    // CHeck loading
    if (loading) return <Box><Typography variant="h1">Loading...</Typography></Box>;
    // Check if we have a project
    if (!projectDataList.length || !ProjectSelection) return <Box><Typography variant="h1">Error: Project not found</Typography></Box>;
   
    // generate project list
    const projectList = projectDataList.map((project, index) => {
        if (ProjectSelection === "job") {
            return (
                <JobCard key={index} data={project} projectPageUrl={`/${ProjectSelection}/${index}`} />
            );
        }
        else {
            return (
                <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center" alignItems="center">
                    <ProjectCard key={index} data={project} projectPageUrl={`/${ProjectSelection}/${index}`} />
                </Grid>
            );
        }
    });

    return (
        <div>
            {ProjectSelection === "job" ? (
                <Box>
                    {projectList}
                </Box>
            ) : (
                <Grid container spacing={1} justifyItems={"right"}>
                    {projectList}
                </Grid>
            )}
        </div>
    );
};

export default HeroPage;