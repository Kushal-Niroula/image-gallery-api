// declaring all essential environment objects
require('dotenv').config();
const env = {
DB_PORT:process.env.DB_PORT,
HOST:process.env.HOST,
USER:'postgres',
PASWWORD:process.env.PASSWORD,
DATABASE:process.env.DATABASE,
DB_CLIENT:process.env.DB_CLIENT,
PORT:process.env.PORT,
JWT_SECRET:process.env.JWT_SECRET,
BCRYPT_SALT:process.env.BCRYPT_SALT
}

module.exports = env
