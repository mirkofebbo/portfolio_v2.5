import { useState, useEffect } from 'react';

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
            const response = await fetch(projectPath);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch error:", error);
            setError(error);
            return null;
        }
    };

    return { projectData, error, loadProjectJson };
}