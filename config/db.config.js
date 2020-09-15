/* 
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "test",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
*/

module.exports = {
        HOST: '/cloudsql/rising-study-289606:us-central1:nodejs-jwt123456',
        DB: 'test', // Create at step 3
        PASSWORD: 'admin@nupay',
        USER: 'root',
        name: 'test',
        connector: 'mysql',
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
};
