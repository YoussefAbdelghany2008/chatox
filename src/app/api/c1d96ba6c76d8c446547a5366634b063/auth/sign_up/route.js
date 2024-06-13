import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import axios from "axios";

let msg;
const validateData = (value, length, patterns, name) => {
    value = value.trim();
    let valid = false;
    if (!value) {
        msg = `please Enter your ${name}`;
    }else if (value.split('').length < length.min) {
        msg = `${name} length must be > or = ${length.min}`;
    }else if (value.split('').length > length.max) {
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
    let { fName, lName, userName, password } = user;
    userName = userName.trim();
    let data; 
    const patterns = {
        main: ['%','^','*','(',')','[',']','"',"'",',','.','/','/',':',';','}','{','-','+','=','?',' '],
        name: ['%','^','&','*','(',')','[',']','"',"'",',','.','/',':',';','}','{','!','@','#','$','_','-','+','=',',','.',':',';','/','?',' '] + [1,2,3,4,5,6,7,8,9,0],
        userName: ['%','^','&','*','(',')','[',']','"',"'",',','.','/',':',';','}','{','!','@','#','$','-','+','=',',','.',':',';','/','?',' '],
        password: ['%','^','*','(',')','[',']','"',"'",',','.','/','/',':',';','}','{','-','+','=','?',' '],
    };
    if (validateData(fName, {min: 3 , max: 15},patterns.name, "first name")) {
        if (validateData(lName, {min: 3 , max: 15},patterns.name, "last name")) {
            if (validateData(userName, {min: 7 , max: 25},patterns.userName, "user name")) {
                if (validateData(password, {min: 7 , max: 30},patterns.password, "password")) {
                    const users = await (await axios.get(`${process.env.API_KEY}/users`)).data;
                  if (users.every(u => u.userName != userName)) {
                        user.password = await bcrypt.hash(user.password.toString(), 10);
                        // ########################
                        user = await (await axios.post(`${process.env.API_KEY}/users`, user)).data; // the problem is here remember that
                        // ########################
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