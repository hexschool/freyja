import { Schema, model, type Document } from 'mongoose';

export interface ICulinary extends Document {
    title: string;
    description: string;
    image: string;
}

const culinarySchema = new Schema<ICulinary>(
    {
        title: {
            type: String,
            required: [true, 'title 未填寫']
        },
        description: {
            type: String,
            required: [true, 'description 未填寫']
        },
        image: {
            type: String,
            required: [true, 'image 未填寫']
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('culinary', culinarySchema);
