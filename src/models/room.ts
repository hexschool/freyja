import { Schema, model, type Document } from 'mongoose';

export interface IRoom extends Document {
    name: string;
    description: string;
    content: string;
    imageUrl: string;
    imageUrlList: string[];
    areaInfo: string;
    bedInfo: string;
    peopleInfo: string;
    price: number;
}

const roomSchema = new Schema<IRoom>(
    {
        name: {
            type: String,
            required: [true, 'name 未填寫']
        },
        description: {
            type: String,
            required: [true, 'description 未填寫']
        },
        content: {
            type: String,
            required: [true, 'content 未填寫']
        },
        imageUrl: {
            type: String,
            required: [true, 'imageUrl 未填寫']
        },
        imageUrlList: [
            {
                type: String,
                trim: true
            }
        ],
        areaInfo: {
            type: String,
            required: [true, 'areaInfo 未填寫']
        },
        bedInfo: {
            type: String,
            required: [true, 'bedInfo 未填寫']
        },
        peopleInfo: {
            type: String,
            required: [true, 'peopleInfo 未填寫']
        },
        price: {
            type: Number,
            required: [true, 'price 未填寫']
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('room', roomSchema);
