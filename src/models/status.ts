
import mongoose, {Schema} from "mongoose";

export const statusSchema = new Schema(
    {
        title: {type: String, required: true, unique: true},
        main_status: {type: Number, required: true},
    },
    {
        timestamps: true
    }
)

export const Status = mongoose.model('Status', statusSchema)