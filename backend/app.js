

const {MiniExpress} = require('./mini-express.js')

const app = new MiniExpress();

// to resigste end points , to set config
// app.handle('/home',(req, res) => {
//     console.log(req.url)
// },'GET')


app.get('/', (req, res) => {
    console.log('>>>', req.url)
    res.end('Users data')

})

app.start(3000, () => console.log('Server started ...'))