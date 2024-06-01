import mongoose, { Schema, model } from "mongoose";

const messageSchema = new Schema({
    for: {type: String, required: true},
    from: {type: String, required: true},
    type: {type: String, required: true},
    content: {type: String, required: true},
    // data: {type: String, required: true},
    // time: {type: String, required: true},
}, { versionKey: false });

const MessageModel = mongoose.models.messages || model("messages",messageSchema);

export default MessageModel;