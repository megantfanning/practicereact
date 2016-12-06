import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import path from 'path';
import api from './api/api';
import rethinkdbdash from 'rethinkdbdash';

const r = rethinkdbdash({  host:"localhost",port: 28015,db: "test"});

const app = express();
app.use(bodyParser.json());

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { publicPath: '/' }));

app.use(express.static('./dist'));
app.use('/api',api(r));
app.get('*', (request, response) => response.sendFile(path.resolve(__dirname, '/dist', '../index.html')));


  /*  app.get('/', function (req, res) { res.send('Hello World!') })*/

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
