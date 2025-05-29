const http = require('http');

const {MiniExpress} = require('./mini-express.js')

const app = new MiniExpress();
app.handler((req, res) => {
    console.log(req.url)
})


// app.get('/users', (req, res) => {

// })

app.start(3000, () => console.log('Server started ...'))