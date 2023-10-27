"use client";

import { useSession, signOut } from "next-auth/react";

function DashboardPage() {
    const { data: session, status } = useSession();

    return (
        <div className="text-white flex flex-col items-center justify-center h-screen lg:h-[calc(100vh-4rem)] gap-y-5 p-4">
            <h1 className="font-bold text-3xl text-center">Profile</h1>

            {status === "authenticated" ? (
                <div className="bg-zinc-800 p-4 rounded-lg overflow-x-auto">
                    <p>Name: {session.user.fullname}</p>
                    <p>Email: {session.user.email}</p>
                    <button className="bg-blue-500 px-4 py-2 rounded-lg w-full lg:w-auto" onClick={() => { signOut(); }}>
                        Sign Out
                    </button>
                </div>
            ) : (
                <p>Not authenticated</p>
            )}


        </div>
    );
}

export default DashboardPage;