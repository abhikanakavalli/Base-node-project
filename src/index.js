const express = require('express');

const configs = require('./config');

const apiRoutes  = require('./router');

const app = express();

// const port = 3000;
console.log("Configs  :",configs);

app.use('/api', apiRoutes);

app.listen(configs.PORT, () => {
    console.log(`listening on port: ${configs.PORT}`);
});