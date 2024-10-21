"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
        const response = await fetch("http://localhost:1337/api/auth/local/register", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            username,
            email,
            password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "An error occurred");
        }

        // Handle successful registration (e.g., save JWT, redirect)
        console.log("User registered successfully:", data);

        // Redirect to login or profile page
        router.push("/profile/login");
        } catch (error) { // Removed `any` type and handle error properly
            if (error instanceof Error) {
                setError(error.message || "An error occurred during login.");
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="min-h-screen-80">
            <div className="max-w-md mx-auto mt-10 p-6 bg-white/60 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                >
                Sign Up
                </button>
            </form>
            </div>
        </div>
    );
}
