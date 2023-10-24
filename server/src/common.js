const PORT = process.env.PORT
const WSPORT = process.env.WSPORT
const MONGO_USER = process.env.MONGO_USER
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_CLUSTER = process.env.MONGO_CLUSTER
const MONGO_DBNAME = process.env.MONGO_DBNAME
const OPENAI_KEY = process.env.OPENAI_KEY

const APP_CONFIG_JSON = JSON.stringify({
  PORT,
  WSPORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_DBNAME,
  OPENAI_KEY
}).replace(/"/g, '\\"')

module.exports = {
  PORT,
  WSPORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_DBNAME,
  OPENAI_KEY,
  APP_CONFIG_JSON,
}
