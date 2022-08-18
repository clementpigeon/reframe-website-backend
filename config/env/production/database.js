const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => {
  if (false) {
    return ({
      connection: {
        client: 'mysql',
        connection: {
          "host": "localhost",
          "port": 3306,
          "database": "strapi",
          "username": "strapi",
          "password": "Cq6u_n454", // TODO update
          ssl: {
            rejectUnauthorized: false
          },
        },
        debug: false,
      },
    });
  }

  return ({
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        },
      },
      debug: false,
    },
  });
}
