import mongoose = require('mongoose');
import {Schema, Document, Model} from 'mongoose';


interface ITestSchema extends Document {
    name: string;
    email: string;
    type: number;
}

const TestSchema: Schema = new Schema({
    name: String,
    email: String,
    type: Number,
});


export interface ITestModel extends Model<ITestSchema> {
}

export const TestModel = mongoose.model<ITestSchema, ITestModel>('Test', TestSchema);

export default TestModel;
