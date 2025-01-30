
import mongoose, {Schema} from "mongoose";

export const todoSchema = new Schema(
    {
        title: {type: String, required: true},
        description: {type: Number, required: true},
        priority: {type: Number},
        status_id: {type: Number},
        category_id: {type: String},
    },
    {
        timestamps: true
    }
)

export const ToDo = mongoose.model('ToDo', todoSchema)