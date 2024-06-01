import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fName: {type: String, required: true, trim: true},
    lName: {type: String, required: true, trim: true},
    avatar: {type: String, required: true},
}, { versionKey: false });

const UserModel = mongoose.models.users || mongoose.model("users",userSchema);

export default UserModel;