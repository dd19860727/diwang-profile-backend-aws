const corsOptions = {
    origin: 'https://www.diwang727.info',
    allowedHeaders:['Origin','Content-Type','Accept','Authorization'],
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions;