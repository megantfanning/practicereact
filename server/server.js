import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import rethinkdbdash from 'rethinkdbdash';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import path from 'path';
import api from './api/api';


const r = rethinkdbdash({ host:"localhost",port: 28015,db: "test"});

const app = express();
app.use(bodyParser.json());

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { publicPath: '/' }));


app.use('/api',api(r));
app.use(express.static('../dist'));

app.get('*', (request, response) => response.sendFile(path.resolve(__dirname, '../dist', 'index.html')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

