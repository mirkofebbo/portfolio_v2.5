import { useParams } from "react-router-dom";
import JobPage from "./JobPage";
import ProjectPage from "./ProjectPage";

const PageSelection = ({ metadata }) => {

    const { role } = useParams();
    if (role === "job") return <JobPage metadata={metadata} />;
    else return <ProjectPage metadata={metadata} />;

}

export default PageSelection;
