import { NextResponse } from "next/server";

import axios from "axios";

const API_KEY = process.env.API_KEY;
export async function GET (req, context) {
    let messages = await (await axios.get(`${API_KEY}/messages`)).data;
    const { params } = context;
    const message = messages.filter( msg => params.messageId == msg._id.toString());
    return NextResponse.json(message);
}