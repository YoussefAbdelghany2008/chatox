import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import UserModel from "@/libs/models/User";
import bcrypt from "bcrypt";
import axios from "axios";

(async () => await dbConnect())()

export async function GET () {
        const users = await UserModel.find();
        return NextResponse.json(users);
}

export async function POST (req) {
    let user = await req.json()
    if (user.password) user.password = await bcrypt.hash(user.password.toString(), 10);
    const newUser = new UserModel(user);
    await newUser.save();
    let users = await (await axios.get(`${process.env.API_KEY}/users`)).data;
    if (user.userName) {
        user = users.filter(u => u.userName == user.userName)[0];
    }else if (user.email) {
        user = users.filter(u => u.email == user.email)[0];
    }
    return NextResponse.json(user)
}