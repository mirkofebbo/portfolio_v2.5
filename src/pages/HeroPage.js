import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useLoadProjectJson } from '../hooks/useLoadProjectJson';
import ProjectCard from '../components/ProjectCard';
import JobCard from '../components/JobCard';

const HeroPage = ({ metadata }) => {
    const { role } = useParams();
    const data = metadata[role];
    const [projectDataList, setProjectDataList] = useState([]);
    const [loading, setLoading] = useState(true);

    const { loadProjectJson } = useLoadProjectJson();

    useEffect(() => {
        const loadProjectData = async () => {
            setLoading(true);

            let loadedData = [];

            loadedData = await Promise.all(
                data.list.map(async (project) => {
                    return await loadProjectJson(project);
                })
            );
            setProjectDataList(loadedData);
            setLoading(false);
        };

        loadProjectData();
    }, [data, loadProjectJson]);

    // CHeck loading
    if (loading) return <Box><Typography variant="h1">Loading...</Typography></Box>;
    // Check if we have a project
    if (!projectDataList.length || !role) return <Box><Typography variant="h1">Error: Project not found</Typography></Box>;

    // generate project list
    const projectList = projectDataList.map((project, index) => {

        if (role === "job") {
            return < JobCard key={index} data={project} projectPageUrl={`/${role}/${index}`} />;
        } else {
            return (
                <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center" alignItems="center">
                    <ProjectCard key={index} data={project} projectPageUrl={`/${role}/${index}`} />
                </Grid>
            );
        }
    });

    return (

        <Grid container spacing={0} justifyItems={"center"}>
            {projectList}
        </Grid>

    );
};

export default HeroPage;