"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
    const router = useRouter();

    useEffect(() => {
        // Clear the JWT from localStorage or other auth state
        localStorage.removeItem("jwt");

        // Redirect to home or login page after sign out
        router.push("/");
    }, [router]);

    return (
        <div className="min-h-screen">
            <div className="max-w-md min-h-screen mx-auto mt-10 p-6 bg-white/60 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Signing out...</h2>
            </div>
        </div>
    );
}
