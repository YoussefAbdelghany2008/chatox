import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {type: String, required: false, trim: true,unique: true, sparse: true}, // do not forget to test sparse: true #### !!
    password: {type: String, required: false, trim: true},
    fName: {type: String, required: true, trim: true},
    lName: {type: String, required: true, trim: true},
    avatar: {type: String, required: true, default: "user.png",},
    email: {type: String, required: false, unique: true, sparse: true },
}, { versionKey: false });

const UserModel = mongoose.models.users || mongoose.model("users",userSchema);

export default UserModel;