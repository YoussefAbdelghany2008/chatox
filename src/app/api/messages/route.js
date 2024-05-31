import { NextResponse } from "next/server";

const messages = [
    {
        _id: "1",
        content: "Hello !!!",
    },
    {
        _id: "2",
        content: "HI !!!",
    },
    {
        _id: "3",
        content: "Bye !!!",
    },
];

export async function GET () {
    return  NextResponse.json(messages);
}

export async function POST (request) {
    const message = await request.json();
    return NextResponse.json(message);
}