import { NextResponse } from "next/server";
import axios from "axios";

export async function GET (req, context) {
    let users = await (await axios.get('http://localhost:3000/api/users')).data;
    const { params } = context;
    const user = users.filter( u => params.userId == u._id.toString());
    return NextResponse.json(user);
}