const localpg = { host: 'localhost', database: 'test', user: 'test', password: 'test'}
const dbConnection = process.env.DATABASE_URL || localpg;

module.exports = {

    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './database/AdviceGiver.db3'
      },
      migrations: {
        directory: './database/migrations'
      },
      seeds: {
        directory: './database/seeds'
      }
    },
  
    // staging: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // },
  
    production: {
      client: 'pg',
      connection: dbConnection,
      migrations: {
        directory: './database/migrations'
      },
      seed: {
        directory: './database/seeds'
      }
    }
  
  };
  