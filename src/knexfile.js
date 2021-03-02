let connection = {
  port: '5432',
  host: 'localhost',
  user: 'postgres',
  password:'root',
  database: 'test',
  charset: 'utf8',
  timezone: 'UTC'
};
module.exports = {
  connection,
  client: 'pg',
}
