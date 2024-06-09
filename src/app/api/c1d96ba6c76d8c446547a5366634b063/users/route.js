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

// export async function POST (request) {
//     let user = await request.json();
//     user.password = await bcrypt.hash(user.password.toString(), 10);
//     const newUser = new UserModel(user);
//     await newUser.save();
//     let users = await (await axios.get(`${process.env.API_KEY}/users`)).data;
//     user = users.filter(u => u.userName == user.userName)[0];
//     return NextResponse.json(user);
    
// }
let msg;
const validateData = (value, length, patterns, name) => {
    value = value.trim();
    let valid = false;
    if (!value) {
        msg = `please Enter your ${name}`;
    }else if (value.split('').length <= length.min) {
        msg = `${name} length must be > or = ${length.min}`;
    }else if (value.split('').length >= length.max) {
        msg = `${name} length must be < ${length.max}`;
    }else {
        const values = value.split('');
        let done = false;
        for (let x = 0; x < values.length; x++) {
            if (done) break;
            let l = values[x];
            for (let y = 0; y < patterns.length; y++) {
                const p = patterns[y];
                if (l == p) { 
                    msg = `you cannot add ${p == ' ' ? "space" : p} to your ${name}`;
                    done = true;
                    break;
                }else if (l == values[values.length -1] && p == patterns[patterns.length -1]) {
                    valid = true;
                }
            }
        }
    }
    return valid;
}

export async function POST (req) {
    let user = await req.json();
    let { fName, lName, userName, password, avatar, email } = user;
    userName = userName.trim();
    let data;
    const namePatterns = ['%','^','&','*','(',')','[',']','"',"'",',','.','/',':',';','}','{','!','@','#','$','_','-','+','=',',','.',':',';','/','?',' '];
    if (validateData(fName, {min: 3 , max: 15},namePatterns, "first name")) {
        if (validateData(lName, {min: 3 , max: 15},namePatterns, "last name")) {
            if ((userName, {min: 7 , max: 25},namePatterns.splice(namePatterns.indexOf('_')), "user name")) {
                const passwordPatterns = ['%','^','*','(',')','[',']','"',"'",',','.','/','/',':',';','}','{','-','+','=','?',' '];
                if ((password, {min: 7 , max: 30},passwordPatterns, "password")) {
                    const users = await (await axios.get(`${process.env.API_KEY}/users`)).data;
                    if (users.every(u => u.userName != userName)) {
                        user.password = await bcrypt.hash(user.password.toString(), 10);
                        const newUser = new UserModel(user);
                        await newUser.save();
                        let users = await (await axios.get(`${process.env.API_KEY}/users`)).data;
                        user = users.filter(u => u.userName == userName)[0];
                        data = {
                            user,
                            status: 200,
                        };
                    }else {
                        msg = "user name is already used";
                        data = {status: 204, msg}
                    }
                }else data = {status: 204, msg};
            }else data = {status: 204, msg};
        }else data = {status: 204, msg};
    }else data = {status: 204, msg};
    return NextResponse.json(data)
}