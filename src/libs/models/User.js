import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, trim: true,  index: { unique: true }},
    password: {type: String, required: true, trim: true},
    fName: {type: String, required: true, trim: true},
    lName: {type: String, required: true, trim: true},
    avatar: {type: String, required: true},
}, { versionKey: false });

const UserModel = mongoose.models.users || mongoose.model("users",userSchema);

export default UserModel;