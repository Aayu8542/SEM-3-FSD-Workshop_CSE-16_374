import http from "http";
const userdata = [
  {
    id: 1,
    name: "John Doe",
    email: "dd",
  }
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  //res.setHeader("Content-Type", "text/plain");

  if (url === "/msg" && method === "GET") {
    res.end("Hello is welcome to my server");
  } 
  else if (url == "/sys" && method == "GET") {
    res.end("This is system information");
  }
  else if (url == "/data" && method == "GET") {
    res.statusCode = 201;
    res.end(JSON.stringify(userdata));
  }
  else if(url =="/create" && method == "POST"){
    const body = " ";
    req.on("data",(chunk)=>{
      body+=chunk;
    });
    req.on("end",()=>{
      const newdata = JSON.parse(body);
      const newdata{
        id: userdata.id,
        name: newdata.name,
        email: newdata.email,
      }
      userdata.push(newdata);
      res.statusCode = 201;
      res.end(JSON.stringify(newdata));
    }); 
  }
  else {
    res.end("Hellow Server");
  }
});

server.listen(3005, () => {
  console.log("Server is running on port 3005");
});



// import http from "http";
// const server = http.createServer((req,res)=>{
//   const url = req.url;
//    res.statusCode = 200;
//    res.setHeader("Content-Type","text/plain");
//   // res.end("Hellow Server");
//   const url = req.url;
//   const method = req.method;
//   if(url === "/msg"&& method === "GET"){ 
//     res.end("Hello is welocome to my server");
//    } 
//    else if(url=="/sys" && method =="GET"){
//     res. end("This is system information");

//      }
//  });
// server.listen(3000,()=> {
//    console.log("Server is running on port 3000");
//  })

// import http from "http";
// const server=http.createServer((req, res)=>{
// res.end("Hello Server");
// })
// server.listen(3000,()=>{
//     console.log("server is running on port number 3000");
// })


//assignmet make .jason file
