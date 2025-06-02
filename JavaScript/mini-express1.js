const http = require('http')

class MiniExpress {
    constructor(){
        console.log('MiniExpress initialize')
        this.routes = {
            GET: [],
            POST: [],
        }
    }

    handle(path, callBack, method){
        this.routes[method].push({path, handler: callBack})

    }

    requestHandler(req, res){
        const {method, url} = req;
        const route = this.routes[method]?.find(r => r.path === url);

        if(route){
            route.handler(req, res);
        }else{
            res.writeHead(404);
            res.end('404 Not Found')
        }

    } 

    get(path, handler){
        this.routes.GET.push({path, handler})

    }

    post(path, handler){
            
        this.routes.POST.push({path, handler})

    
    }

    delete(path, cb){
        
    }

    start(PORT, callBack){
        const server = http.createServer((req,res) => this.handle()) 

        // listen cb
        server.listen(PORT, cb)
    }
}

module.exports = {
    MiniExpress
}