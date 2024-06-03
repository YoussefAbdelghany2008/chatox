import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import UserModel from "@/libs/models/User";

(async () => await dbConnect())()

export async function GET () {
        const users = await UserModel.find();
        return NextResponse.json(users);
}

export async function POST (request) {
    const user = await request.json();
    const newUser = new UserModel(user);
    await newUser.save();
    return NextResponse.json(user);
    
}