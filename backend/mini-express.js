
const http = require('http')

class MiniExpress{
    constructor(){
        this.routes = {
            GET: [],
            POST: []
        }

    }

    requestHandler(req,res){
        const {method, url} = req;
        const route = this.routes[method]?.find( obj => obj.path === url)
        console.log(route)
        if(route){
            route.handler(req, res)
        }else{
            res.end('not found')
        }
        

    }

    get(path, handler){
        this.routes.GET.push({path, handler})

    }

    post(path, handler){
        this.routes.POST.push({path, handler})

    }

    start(PORT, callBack){
        const server = http.createServer((req, res)=> { this.requestHandler(req, res)})
        server.listen(PORT, callBack)
    }

}

module.exports = {
    MiniExpress
}