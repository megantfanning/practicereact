/**
 * Created by megan on 12/5/16.
 */
import express from 'express';
import bodyParser from 'body-parser';
import base from './base';
//import rethinkChangeHandler from './rethink-change-handler';

export default (r) => {
// eslint-disable-next-line new-cap
    const api = express.Router();
    api.use(bodyParser.json({ limit: '16mb' }));
    //rethinkChangeHandler(r);

    api.use('/patients', base(r, 'patients'));

    return api;
};