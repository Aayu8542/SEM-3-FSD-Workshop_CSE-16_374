import http from "http";
const server = http.createServer((req,res)=>{
  const url = req.url;
   res.status = 201;
   res.setHeader("Content-Type","text/plain");
   res.end("Hellow Server");
  const url = req.url;
  const method = req.method;
  if(url === "/msg"&& method === "GET"){ 
    res.end("Hello is welocome to my server");
   } 
   else if(url=="/sys" && method =="GET"){
    res. end("This is system information");

     }
 });
server.listen(300,()=> {
   console.log("Server is running on port 3000");
 })

// import http from "http";
// const server=http.createServer((req, res)=>{
// res.end("Hello Server");
// })
// server.listen(3000,()=>{
//     console.log("server is running on port number 3000");
// })


assignmet make .jason file
