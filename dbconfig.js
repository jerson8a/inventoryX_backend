const config = {
    user: 'jerson.ochoa',
    password: 'R@yo2102',
    server: 'prismadb.database.windows.net',
    database: 'Prisma_DB',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

module.exports = config;