import React, { useState, useEffect } from "react";
import "./AuthGuard.css";

interface AuthGuardProps {
    children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const verifyToken = async (token: string) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/verify`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.ok) {
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem("ekaterina_token");
                setIsAuthenticated(false);
            }
        } catch {
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("ekaterina_token");
        if (token) {
            verifyToken(token);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();
            if (res.ok && data.token) {
                localStorage.setItem("ekaterina_token", data.token);
                setIsAuthenticated(true);
            } else {
                setError("Invalid credentials");
            }
        } catch {
            setError("Server error");
        }
    };

    if (isAuthenticated === null) return <div className="builder-loading">Verifying...</div>;

    if (!isAuthenticated) {
        return (
            <div className="auth-overlay">
                <form className="auth-card" onSubmit={handleLogin}>
                    <h2>Admin Access</h2>
                    <input
                        type="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Access</button>
                    {error && <p className="auth-error">{error}</p>}
                </form>
            </div>
        );
    }

    return <>{children}</>;
}