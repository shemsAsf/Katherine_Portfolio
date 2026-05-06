import { useState, useEffect } from "react";
import { fetchIndex, IndexEntry, updateProjectVisibility } from "./builder/BuilderApi";
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

    const toggleVisibility = (id: number) => {
        setProjects(prev => prev.map(p =>
            p.id === id ? { ...p, visible: !p.visible } : p
        ));
    };

    const handleSaveVisibility = async () => {
        try {
            const token = localStorage.getItem("ekaterina_token") ?? "";
            await updateProjectVisibility(token, projects.map(p => ({ id: p.id, visible: p.visible })));
        } catch (err) {
            alert("Failed to save visibility");
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
                    ← Back to Dashboard
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
            <header className="dashboard-header">
                <h1>Design Projects</h1>
                <div>
                    <button className="add-btn" onClick={handleAddNew}>
                        + Add New Project
                    </button>

                    <button className="save-btn" onClick={() => handleSaveVisibility()}>
                        Save Status
                    </button>
                </div>
            </header>

            {loading ? <p>Loading projects...</p> : (
                <ul className="project-list">
                    {projects.map(project => (
                        <li key={project.id} className="project-item">
                            <span className="project-title">
                                <strong>#{project.id}</strong> {project.title || "Untitled Project"}
                            </span>

                            <div className="project-actions">
                                <button
                                    className={`toggle-btn ${project.visible ? 'visible' : 'hidden'}`}
                                    onClick={() => toggleVisibility(project.id)}
                                >
                                    {project.visible ? "👁 Show" : "👁‍🗨 Hide"}
                                </button>

                                <button className="edit-btn" onClick={() => setEditingProject(project)}>
                                    Edit Content
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}