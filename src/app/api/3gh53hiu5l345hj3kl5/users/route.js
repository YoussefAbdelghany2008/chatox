import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import UserModel from "@/libs/models/User";

// const users = [
//     { _id: "ali" },{ _id: "youssef" },{ _id: "osama" },{ _id: "said" },
// ];

export async function GET () {
    await dbConnect();
        const users = await UserModel.find();
        return NextResponse.json(users);
}

export async function POST (request) {
    await dbConnect();
    const user = await request.json();
    const newUser = new UserModel(user);
    await newUser.save();
    return NextResponse.json(user);
    
}