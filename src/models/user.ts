import { Schema, model, type Document } from 'mongoose';
import validator from 'validator';
import { zipCodeList } from '@/utils/zipcodes';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: Date;
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
            required: [true, 'name 未填寫'],
            validate: {
                validator(value: string) {
                    return validator.isLength(value, { min: 2 });
                },
                message: 'name 至少 2 個字元以上'
            }
        },
        email: {
            type: String,
            required: [true, 'email 未填寫'],
            validate: {
                validator(value: string) {
                    return validator.isEmail(value);
                },
                message: 'Email 格式不正確'
            }
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
            type: Date,
            required: [true, 'birthday 未填寫']
        },
        address: {
            zipcode: {
                type: Number,
                required: [true, 'zipcode 未填寫'],
                validate: {
                    validator(value: number) {
                        return zipCodeList.includes(value);
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
