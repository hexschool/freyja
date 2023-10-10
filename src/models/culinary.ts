import { Schema, model, type Document } from 'mongoose';
import validator from 'validator';

export interface ICulinary extends Document {
    title: string;
    description: string;
    diningTime: string;
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
        diningTime: {
            type: String,
            required: [true, 'diningTime 未填寫']
        },
        image: {
            type: String,
            required: [true, 'image 未填寫'],
            validate: {
                validator(value: string) {
                    return validator.isURL(value, { protocols: ['https'] });
                },
                message: 'image 格式不正確'
            }
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('culinary', culinarySchema);
