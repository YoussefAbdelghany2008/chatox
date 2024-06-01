import { NextResponse } from "next/server";

const users = [
    { _id: "ali" },{ _id: "youssef" },{ _id: "osama" },{ _id: "said" },
];

export async function GET () {
    // return new Response('hello world');
    return NextResponse.json(users);
}

export async function POST (request) {
    const user = await request.json();
    return NextResponse.json(user);
}