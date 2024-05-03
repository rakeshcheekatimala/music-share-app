import mongoose from 'mongoose';
const { Schema } = mongoose;

const FileSchema = new Schema({
    fileName: { type: String, required: true },
    secureUrl: { type: String, required: true },
    format: { type: String, required: true },
    sizeInBytes: { type: String, required: true },

},{ timestamps: true })

export default mongoose.model('File', FileSchema)