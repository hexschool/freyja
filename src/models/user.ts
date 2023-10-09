import { Schema, model, type Document } from 'mongoose';
import { zipCodeList } from '@/utils/zipcodes';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    address: {
        zipcode: number;
        detail: string;
    };
    isEmailVerification: boolean;
}

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: [true, 'name 未填寫']
        },
        email: {
            type: String,
            required: [true, 'email 未填寫']
        },
        password: {
            type: String,
            required: [true, 'password 未填寫'],
            select: false
        },
        phone: {
            type: String,
            required: [true, 'phone 未填寫']
        },
        birthday: {
            type: String,
            required: [true, 'birthday 未填寫']
        },
        address: {
            zipcode: {
                type: Number,
                required: [true, 'zipcode 未填寫'],
                validate: {
                    validator(zipcode: number) {
                        return zipCodeList.includes(zipcode);
                    },
                    message: 'zipcode 錯誤'
                }
            },
            detail: {
                type: String,
                required: [true, 'detail 未填寫']
            }
        },
        isEmailVerification: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('user', userSchema);
