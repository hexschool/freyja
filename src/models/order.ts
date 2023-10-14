import { Schema, model, type Document } from 'mongoose';
import validator from 'validator';
import { zipCodeList } from '@/utils/zipcodes';

export interface IOrder extends Document {
    roomId: Schema.Types.ObjectId;
    checkInDate: Date;
    checkOutDate: Date;
    peopleNum: number;
    orderUserId: Schema.Types.ObjectId;
    userInfo: {
        name: string;
        phone: string;
        email: string;
        address: {
            zipcode: number;
            detail: string;
        };
    };
    status: number;
}

const orderSchema = new Schema<IOrder>(
    {
        roomId: {
            type: Schema.Types.ObjectId,
            ref: 'room',
            required: [true, 'roomId 未填寫']
        },
        checkInDate: {
            type: Date,
            required: [true, 'checkInDate 未填寫']
        },
        checkOutDate: {
            type: Date,
            required: [true, 'checkOutDate 未填寫']
        },
        peopleNum: {
            type: Number,
            required: [true, 'peopleNum 未填寫'],
            validate: {
                validator(value: number) {
                    return validator.isInt(`${value}`, { min: 1 });
                },
                message: 'peopleNum 格式不正確'
            }
        },
        orderUserId: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: [true, 'orderUserId 未填寫']
        },
        userInfo: {
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
            phone: {
                type: String,
                required: [true, 'phone 未填寫']
            },
            email: {
                type: String,
                required: [true, 'email 未填寫'],
                validate: {
                    validator(value: string) {
                        return validator.isEmail(value);
                    },
                    message: 'email 格式不正確'
                }
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
            }
        },
        status: {
            type: Number,
            default: 0
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('order', orderSchema);
