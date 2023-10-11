const PORT = process.env.PORT || 8080

const APP_CONFIG_JSON = JSON.stringify({
  PORT,
}).replace(/"/g, '\\"')

module.exports = {
  PORT,
  APP_CONFIG_JSON,
}
