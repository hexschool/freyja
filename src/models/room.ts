import { Schema, model, type Document } from 'mongoose';
import validator from 'validator';

export interface IRoom extends Document {
    name: string;
    description: string;
    content: string;
    imageUrl: string;
    imageUrlList: string[];
    areaInfo: string;
    bedInfo: string;
    maxPeople: number;
    price: number;
    // 可使用：1，已刪除：-1
    status: number;
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
            required: [true, 'imageUrl 未填寫'],
            validate: {
                validator(value: string) {
                    return validator.isURL(value, { protocols: ['https'] });
                },
                message: 'imageUrl 格式不正確'
            }
        },
        imageUrlList: [
            {
                type: String,
                trim: true,
                validate: {
                    validator(value: string) {
                        return validator.isURL(value, { protocols: ['https'] });
                    },
                    message: 'imageUrlList 格式不正確'
                }
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
        maxPeople: {
            type: Number,
            required: [true, 'maxPeople 未填寫'],
            validate: {
                validator(value: number) {
                    return validator.isInt(`${value}`, { min: 1 });
                },
                message: 'maxPeople 格式不正確'
            }
        },
        price: {
            type: Number,
            required: [true, 'price 未填寫']
        },
        status: {
            type: Number,
            default: 1
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('room', roomSchema);
