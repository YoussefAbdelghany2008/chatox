import { NextResponse } from "next/server";

const users = { name: "Ali" };

export async function GET () {
    // return new Response('hello world');
    return NextResponse.json(users);
}

export async function POST (request) {
    const user = await request.json();
    return NextResponse.json(user);
}