import { Schema } from 'mongoose';

export interface IItem {
    title: string;
    isProvide: boolean;
}

const itemSchema = new Schema<IItem>(
    {
        title: {
            type: String,
            required: [true, 'Item title 未填寫']
        },
        isProvide: {
            type: Boolean,
            required: [true, 'Item isProvide 未填寫']
        }
    },
    {
        _id: false
    }
);

export default itemSchema;
