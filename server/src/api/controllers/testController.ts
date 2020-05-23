import Base from './baseController';
import {Model, Schema, Document} from 'mongoose';
import {ITestModel} from '../models/testModel';

/**
 * The following class is for testing purposes
 * the method 'insert' uses 'save' option of mongoose model to save an entry
 * */

export default class TestClass<T extends ITestModel> extends Base<T> {
    constructor(model: T) {
        super(model);
    }

    public insert(req: any, res: any) {
        const obj = new this.model(req.body);
        obj.save((err: any, item: any) => {
            if (err) {
                return console.error(err);
            }
            res.status(200).json(item);
        });
    }
}
