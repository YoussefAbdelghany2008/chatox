"use client"

import { useSelector } from "react-redux";

export default function Home() {
    const { messages, isLoading, error, status } = useSelector(state => state.messages);

    return (
        <>
            <main className="center h-screen">
                { isLoading === true && <main className="center"><h1>Loading 😴😴😴</h1></main>}
                <h1>chat</h1>
                <br />
                <br />
                <br />
                {status === "succeed" && messages.map( msg => (
                    <h1>{msg.content}</h1>
                ))}
              	{status === 'failed' && <p>{error}</p>}
            </main>
        </>
    );
}
