import { NextResponse } from "next/server";
import axios from "axios";

const API_KEY = process.env.API_KEY;

export async function GET (req, context) {
    let users = await (await axios.get(`${API_KEY}/users`)).data;
    console.log(users)
    const { params } = context;
    const user = users.filter( u => params.userId == u._id.toString());
    return NextResponse.json(user);
}