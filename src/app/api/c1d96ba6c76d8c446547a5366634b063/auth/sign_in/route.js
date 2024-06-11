import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import axios from "axios";

export async function POST (request) {
    const { userName, password } = await request.json();
    let data;
    let users = await (await axios.get(`${process.env.API_KEY}/users`)).data;
    const user = users.filter(u => u.userName == userName)[0];
    if (userName) {
        if (password) {
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {
                   data = {
                        user,
                        status: 200,
                    };
                }else {
                    data = {
                        status: 204,
                        msg: "password is wrong"
                    }
                }
            }else {
                data = {
                    status: 204,
                    msg: "user name is wrong"
                };
            }
        }else {
            data = {
                status: 204,
                msg: "please Enter your password"
            }
        }
    }else {
        data = {
            status: 204,
            msg: "please Enter your user name"
        }
    }
    return NextResponse.json(data);
    
}