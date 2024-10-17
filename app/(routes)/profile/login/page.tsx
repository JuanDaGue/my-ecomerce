"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


export default function LoginPage() {
    const [identifier, setIdentifier] = useState(""); // Can be username or email
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
        const response = await fetch("http://localhost:1337/api/auth/local", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            identifier,
            password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "An error occurred");
        }

        // Save JWT in localStorage or use it in your app's context
        localStorage.setItem("jwt", data.jwt);
        console.log("Login successful:", data);

        // Redirect to the profile or dashboard
        router.push("/profile");
        } catch (error: any) {
        setError(error.message || "An error occurred during login.");
        }
    };

    return (
        <div className="min-h-screen">

        <div className="max-w-md  mx-auto mt-10 p-6 bg-white/80 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
            <div className="mb-4">
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                Username or Email
            </label>
            <input
                type="text"
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            </div>
            <Button
            // type="submit"
            className="w-full py-2 px-4 rounded-md"
            >
            Login
            </Button>
        </form>
        </div>
        
        </div>
    );
}
