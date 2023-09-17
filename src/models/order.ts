import { Schema, model, type Document } from 'mongoose';

export interface IOrder extends Document {
    roomInfo: Schema.Types.ObjectId;
    checkInDate: Date;
    checkOutDate: Date;
    peopleNum: number;
    userInfo: Schema.Types.ObjectId;
}

const orderSchema = new Schema<IOrder>(
    {
        roomInfo: {
            type: Schema.Types.ObjectId,
            ref: 'room',
            required: [true, 'roomInfo 未填寫']
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
            required: [true, 'peopleNum 未填寫']
        },
        userInfo: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: [true, 'userInfo 未填寫']
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('order', orderSchema);
