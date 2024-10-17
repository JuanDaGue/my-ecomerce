"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Fetch user info if JWT exists
        const fetchProfile = async () => {
        const token = localStorage.getItem("jwt");

        if (!token) {
            // No JWT, user is not logged in
            setLoading(false);
            return;
        }

        try {
            // Fetch user profile information with the stored JWT
            const response = await fetch("http://localhost:1337/api/users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });

            if (!response.ok) {
            throw new Error("Failed to fetch user info");
            }

            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error("Error fetching profile:", error);
            localStorage.removeItem("jwt"); // Clear token if it fails
        } finally {
            setLoading(false);
        }
        };

        fetchProfile();
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("jwt");
        setUser(null); // Clear user data
        router.push("/profile");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen">
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md ">
            {user ? (
                <div>
                <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>ID:</strong> {user.id}</p>
                {/* Additional user info */}
                <button
                    onClick={handleSignOut}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                >
                    Sign Out
                </button>
                </div>
            ) : (
                <div>
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                <p className="mb-4">You are not logged in.</p>
                <div className="flex justify-around">
                    <Button
                    onClick={() => router.push("/profile/login")}
                    className= "py-2 px-4 rounded-md"
                    >
                    Log In
                    </Button>
                    <Button
                    onClick={() => router.push("/profile/signup")}
                    className= "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                    >
                    Sign Up
                    </Button>
                </div>
                </div>
            )}
            </div>
        </div>
        );
}
