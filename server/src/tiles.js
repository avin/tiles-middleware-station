import KoaRouter from 'koa-router';

const routes = KoaRouter();

routes.get('/:url',
    async (ctx, next) => {
        const {
            url
        } = ctx.params;

        ctx.body = {
            url: url,
        };
    });


export default routes;