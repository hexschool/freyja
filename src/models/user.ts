import { Schema, model, type Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    address: string;
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
            type: String,
            required: [true, 'address 未填寫']
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('user', userSchema);
