'use strict'
const app = require('./server')
const PORT = process.env.PORT || 3000
require('dotenv').config();

console.log(process.env.NODE_ENV);
 
app.listen(PORT, () => console.log(`App running on Port: ${PORT}`))