import Koa from 'koa';
import tiles from './tiles';
import mount from 'koa-mount';
import serve from 'koa-static';


const tilesApp = new Koa()
    .use(tiles.routes())
    .use(tiles.allowedMethods());

const mapStaticApp = new Koa()
    .use(serve('./client/web'));

const mapBuildApp = new Koa()
    .use(serve('./client/build'));

var app = new Koa();

app.use(mount('/tiles', tilesApp));

app.use(mount('/map', mapStaticApp));
app.use(mount('/map/build', mapBuildApp));

export default app;