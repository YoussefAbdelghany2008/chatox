import { NextResponse } from "next/server";
import axios from "axios";

export async function GET (req, context) {
    let messages = await (await axios.get('http://localhost:3000/api/messages')).data;
    const { params } = context;
    const message = messages.filter( msg => params.messageId == msg._id.toString());
    return NextResponse.json(message);
}