"use client"

import { useSession, signOut } from "next-auth/react";

function DashboarPage() {

    const { data: session, status } = useSession();
    console.log(session, status);

    return (
        <div className="text-white flex flex-col items-center justify-center h-auto lg:h-[calc(100vh-4rem)] gap-y-5 p-4">
            <h1 className="font-bold text-3xl text-center">Profile</h1>

            <div className="bg-zinc-800 p-4 rounded-lg overflow-x-auto">
                <pre>
                    {JSON.stringify(
                        {
                            session,
                            status,
                        },
                        null,
                        2
                    )}
                </pre>
            </div>

            <button className="bg-blue-500 px-4 py-2 rounded-lg w-full lg:w-auto" onClick={() => { signOut(); }}>
                Sign Out
            </button>
        </div>

    )
}

export default DashboarPage