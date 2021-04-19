require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const koaBody = require('koa-body');
const htmlRender = require("koa-html-render")


dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const { route } = require('next/dist/next-server/server/router');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

const server = new Koa();
const router = new KoaRouter();

var products = [];
let user_settings = {
  uuid: '328u0293eu023ue2309',
  global_client_id: '1234567890',
  shop_name: 'The krusty krab',
  photo_url: 'https://graffica.info/wp-content/uploads/2017/08/LogoNasaSpotB-1200x900.jpg',
  limit_ammount: 100,
  settings: {
    address: true,
    ammount: true,
  }
};

//Información para la información estatica
server.use(htmlRender());

router.get('/api/proxy', async (ctx) => {
  await ctx.html('proxy/index.html');
});


router.get('/api/conditions', async (ctx) => {
  try {
    ctx.body = {
      data: user_settings,
    };
  } catch (error) {
    console.log(error);
  }
});

router.get('/api/user-settings', async (ctx) => {
  ctx.body = {
    data: user_settings,
  }
});

router.post('/api/user-settings', koaBody(), async (ctx) => {
  user_settings = ctx.request.body;
  ctx.body = {
    mensaje: 'Se han actualizado los datos del usuerio',
    data: user_settings,
  }
});

router.post('/api/conditions', koaBody(), async (ctx) => {
  const valor = (ctx.request.body);
  user_settings.settings = valor;
  console.log(valor);
  ctx.body = {
    mensaje: 'Actualizando data',
    data: user_settings,
  }
});

router.get('/api/products', async (ctx) => {
  try {
    ctx.body = {
      status: 'success',
      data: products
    }
  } catch (error) {
    console.log(error)
  }
})

router.post('/api/products', koaBody(), async (ctx) => {
  try {
    const body = ctx.request.body;
    await products.push(body)
    ctx.body = "Item Added"
  } catch (error) {
    console.log(error)
  }
})

router.delete('/api/products', koaBody(), async (ctx) => {
  try {
    products = [];
    ctx.body = "All items deleted!"
  } catch (error) {
    console.log(error)
  }
})

// Router Middleware
server.use(router.allowedMethods());
server.use(router.routes());

app.prepare().then(() => {
  
  
  server.use(session({ sameSite: 'none', secure: true }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: [
        'read_products',
        'write_products',
        'read_script_tags',
        'write_script_tags'
      ],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });
        ctx.redirect('/');
      },
    }),
  );

  server.use(graphQLProxy({ version: ApiVersion.October19 }))
  server.use(verifyRequest());
  

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });

});
