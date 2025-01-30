import mongoose, {Schema} from "mongoose";

export const noteSchema = new Schema(
    {
        todo_id: {type: String},
        title: {type: String},
        content: {type: String, required: true},
    },
    {
        timestamps: true
    }
)

export const Note = mongoose.model('Note', noteSchema)