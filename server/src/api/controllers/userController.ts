import Base from './baseController';
import {IUserModel} from '../models/userModel';

/**
 * User class
 * */

export default class UserClass<T extends IUserModel> extends Base<T> {
    constructor(model: T) {
        super(model);
    }

    public get(req: any, res: any) {
        this.model.findOne({_id: req.params.userId}, (err: any, obj: any) => {
            if (err) {
                return console.error(err);
            }
            res.json(obj);
        });
    }
}
