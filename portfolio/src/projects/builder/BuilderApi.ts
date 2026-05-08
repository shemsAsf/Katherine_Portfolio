const API = process.env.REACT_APP_API_URL;

export interface IndexEntry {
    id: number;
    title: string;
    subtitle: string;
    cover: string;
    tools: string[];
    visible: boolean;
}

export interface PublishPayload {
    index: Omit<IndexEntry, "cover"> & { cover: File | string };
    body: unknown[];
    images: Record<string, File>
}

export async function fetchIndex(): Promise<IndexEntry[]> {
    const res = await fetch(`${API}/projects`);
    if (!res.ok) throw new Error("Failed to fetch index");
    const data = await res.json();
    return data.projects;
}

export function getDictFromPath(url: string): { name: string; url: string; } {
    const filename = url.split("/").pop() ?? url;
    return { name: filename.replace(/\.png$/i, ""), url };
}

export async function fetchPigeons(): Promise<string[]> {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/projects-pigeons`);
    if (!res.ok) throw new Error("Failed to fetch pigeons");
    const data = await res.json();
    return data.urls.result;
}

export async function fetchTools(): Promise<{ name: string; url: string; }[]> {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/projects-tools`);
    if (!res.ok) throw new Error(`Failed to fetch tools`);

    const data = await res.json();
    return data.urls.result.map((url: string) => getDictFromPath(url));
}

export async function uploadTool(token: string, file: File): Promise<{ name: string; url: string; }> {
    const form = new FormData();
    form.append("file", file);

    const res = await fetch(`${API}/projects-tools`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
    });
    if (!res.ok) throw new Error("Failed to upload tool");

    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    return getDictFromPath(data.url)
}

export async function uploadImage(
    token: string,
    projectId: number,
    role: string,
    file: File
): Promise<string> {
    const form = new FormData();
    form.append("file", file);
    form.append("role", role);

    const res = await fetch(`${API}/projects/${projectId}/images`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
    });
    if (!res.ok) throw new Error(`Failed to upload ${role}`);
    const data = await res.json();
    return data.url as string;
}

export async function fetchProject(id: number): Promise<any> {
    const res = await fetch(`${API}/projects/${id}`);
    if (!res.ok) throw new Error("Failed to fetch project");
    const data = await res.json();
    return data;
}

export async function publishProject(
    token: string,
    projectId: number,
    indexEntry: IndexEntry,
    pageBody: unknown[]
): Promise<void> {

    const res = await fetch(`${API}/projects/${projectId}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ index: indexEntry, body: pageBody }),
    });
    if (!res.ok) throw new Error("Failed to publish project");
}