import { useState, useEffect } from "react";
import { fetchIndex, IndexEntry } from "./builder/BuilderApi";
import Builder from "./builder/Builder";
import "./style/ProjectManager.css"


export default function ProjectManager() {
    const [projects, setProjects] = useState<IndexEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingProject, setEditingProject] = useState<IndexEntry | null>(null);
    const [newProjectId, setNewProjectId] = useState<number | null>(null);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        setLoading(true);
        try {
            const data = await fetchIndex();
            setProjects(data);
        } catch (err) {
            console.error("Failed to load projects", err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddNew = () => {
        const maxId = projects.length > 0
            ? Math.max(...projects.map(p => p.id))
            : 0;
        setNewProjectId(maxId + 1);
    };

    if (editingProject || newProjectId) {
        return (
            <div className="admin-view">
                <button className="back-btn" onClick={() => {
                    setEditingProject(null);
                    setNewProjectId(null);
                    loadProjects();
                }}>
                    &lt; Back to Dashboard
                </button>
                <Builder
                    index={editingProject ?? undefined}
                    newId={newProjectId ?? undefined}
                />
            </div>
        );
    }

    return (
        <div className="project-dashboard">
            <div className="dashboard-header">
                <h1>Design Projects</h1>
            </div>

            {loading ? <p>Loading projects...</p> : (
                <ul className="project-list">
                    {projects.map(project => (
                        <li key={project.id} className="project-item">
                            <span className="project-title">
                                <strong>#{project.id}</strong> {project.title || "Untitled Project"}
                            </span>

                            <div className="project-actions">
                                <button className="edit-btn" onClick={() => setEditingProject(project)}>
                                    Edit Content
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            
                <div className="add-btn-div">
                    <button className="add-btn" onClick={handleAddNew}>
                        + Add New Project
                    </button>
                </div>
        </div>
    );
}