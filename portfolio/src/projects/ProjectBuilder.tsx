import { useParams } from 'react-router-dom';
import { PageElement, renderElement } from './ElementRegistery';
import { useEffect, useState } from 'react';
import { fetchProject } from './builder/BuilderApi';

export default function ProjectBuilder() {
    const { id } = useParams<{ id: string }>();
    const [body, setBody] = useState<PageElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function loadProject() {
            try {
                const projectId = Number(id);
                if (isNaN(projectId)) {
                    throw new Error("Invalid project id");
                }

                setLoading(true);

                const data: PageElement[] = await fetchProject(projectId);
                setBody(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error("Unknown error"));
                }
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            loadProject();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading project</div>;
    if (!body) return <div>No project found</div>;

    return (
        <div>
            <section>
                {body.map((element: PageElement, index: number) => {
                    return renderElement(element, index);
                })}
            </section>
        </div>
    );
};