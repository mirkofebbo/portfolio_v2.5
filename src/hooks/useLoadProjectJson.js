import { useState } from 'react';

export function useLoadProjectJson() {
    const [projectData, setProjectData] = useState(null);
    const [error, setError] = useState(null);

    const loadProjectJson = async ( project ) => {

        let projectPath = '';        
        if (!project) {
            return null;
        } else if (project.url){
            projectPath = `/data/projects/${project.url}`;
        } else  {
            projectPath =`/data/projects/${project}`;
        }

        try {
            const response = await fetch(process.env.PUBLIC_URL + projectPath);
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const text = await response.text();
            const data = JSON.parse(text);
            setProjectData(data);
            return data;
        } catch (error) {
            console.error("Fetch error:", error);
            setError(error);
            return null;
        }
    };

    return { projectData, error, loadProjectJson };
}