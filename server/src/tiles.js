import KoaRouter from 'koa-router';
import request from 'requestretry';
import _ from 'lodash';
import querystring from 'querystring';

const routes = KoaRouter();

routes.get('/:url*',
    async(ctx, next) => {
        const {
            url
        } = ctx.params;

        const query = ctx.request.query;

        const protocol = _.get(query, '__protocol', 'http');
        const nocachePrimary = _.get(query, '__nocache-primary', false);
        const nocacheOnly = _.get(query, '__nocache-only', false);
        const filter = _.get(query, '__filter');
        delete query['__protocol'];
        delete query['__nocache-primary'];
        delete query['__nocache-only'];
        delete query['__filter'];

        const queryStr = querystring.stringify(query);

        //Get tile
        const tileResponse = await request({
            url: `${protocol}://${url}?${queryStr}`,
            encoding: null, // Don't encode body
            maxAttempts: 5, // try 5 times
            retryDelay: 500, // wait for 5s before trying again
            fullResponse: true // To resolve the promise with the full response
        });

        ctx.response.type = 'image/png';
        ctx.response.set(tileResponse.headers);
        ctx.body = tileResponse.body;

    });

export default routes;