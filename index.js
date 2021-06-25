const fastify = require('fastify');
const db = require('./config/db');
const routes = require('./routes/post');
const app = fastify({ logger: true });

app.register(db);

routes.forEach((route, index) => {
    app.route(route)
});

app.get("/", async () => {
    return { Message: "connected to Fastify"}
});

const PORT = process.env.PORT || 5000;

const start = async() => {
    try {
        await app.listen(PORT);
        app.log.info(`Server listening on ${PORT}`)
    } catch (err) {
        app.log.error(err);
        process.exist(1);
    }
}
start()
