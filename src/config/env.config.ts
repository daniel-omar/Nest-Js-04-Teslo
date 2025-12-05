export const envConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    dbPassword: process.env.DB_PASSWORD,
    dbUsername: process.env.DB_USERNAME,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: +process.env.DB_PORT!,
    port: process.env.PORT || '3105',
});