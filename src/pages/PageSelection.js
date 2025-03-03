import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import JobPage from "./JobPage";
import ProjectPage from "./ProjectPage";

const PageSelection = ({ metadata }) => {

    const { role, ProjectIndex } = useParams();

    if (parseInt(ProjectIndex) !== NaN) return <ProjectPage metadata={metadata} />;
    else return <JobPage metadata={metadata} />;
    
}

export default PageSelection;
