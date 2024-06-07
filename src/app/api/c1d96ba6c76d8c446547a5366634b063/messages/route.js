import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import MessageModel from "@/libs/models/Message";

(async () => await dbConnect())()

export async function GET () {
    const messages = await MessageModel.find();
    return  NextResponse.json(messages);
}

export async function POST (request) {
    const message = await request.json();
    const newMessage = new MessageModel(message);
    await newMessage.save();
    return NextResponse.json(message);
}