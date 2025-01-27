import mongoose, {Schema} from "mongoose";

export const categorySchema = new Schema(
    {
        title: {type: String, required: true, unique: true},
        icon: {type: String},
    },
    {
        timestamps: true
    }
)

export const Category = mongoose.model('Category', categorySchema)