const {DB_PORT, HOST, USER, PASWWORD, DATABASE, DB_CLIENT } =  require('./env.js')

//connection string
let connection = {
  port: DB_PORT,
  host: HOST,
  user: USER,
  password:PASWWORD,
  database: DATABASE,
  charset: 'utf8',
  timezone: 'UTC'
};
module.exports=  {
  connection,
  client: DB_CLIENT,
}
