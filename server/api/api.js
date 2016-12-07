/**
 * Created by megan on 12/5/16.
 */
import express from 'express';
import bodyParser from 'body-parser';
import base from './base';

export default (r) => {
  const api = express.Router();
  api.use(bodyParser.json({ limit: '16mb' }));
  /* list of functions to use */
  api.use('/patients', base(r, 'patients'));
  return api;
};