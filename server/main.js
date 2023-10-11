
require('dotenv').config()

const app = require('./src/app');
const { PORT } = require('./src/common');

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
}) 