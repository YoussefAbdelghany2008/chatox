import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import UserModel from "@/libs/models/User";
import axios from "axios";

(async () => await dbConnect())()

export async function GET () {
        const users = await UserModel.find();
        return NextResponse.json(users);
}

export async function POST (request) {
    let user = await request.json();
    const newUser = new UserModel(user);
    await newUser.save();
    let users = await (await axios.get(`${process.env.API_KEY}/users`)).data;
    user = users.filter(u => u.userName == user.userName)[0];
    return NextResponse.json(user);
    
}