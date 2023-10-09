//importing json-server in index.js
const jsonserver=require('json-server')


//creating server application using jsonserver
const server=jsonserver.create()



//setup path for db.json
const router=jsonserver.router('db.json')



//setup middleware
const middleware=jsonserver.defaults()



//setup the portnumber
const port=process.env.PORT || 3001



//use router and middleware
server.use(middleware)
server.use(router)


//run port to get the portnumber
server.listen(port,()=>{
    console.log('listening on the port' +port);
})
