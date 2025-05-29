const http = require('http')

class MiniExpress {
    constructor(){
        console.log('MiniExpress initialize')
    }

    handler(cb){
        cb()

    }

    requestHandler(req, res){

    } 

    get(path, cb){

    }

    post(path,cb){

    
    }

    delete(path, cb){
        
    }

    start(PORT, cb){
        const server = http.createServer(this.requesthandler)

        // listen cb
        server.listen(PORT, cb)
    }
}

module.exports = {
    MiniExpress
}