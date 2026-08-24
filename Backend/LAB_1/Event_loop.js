console.log("start");

process.nextTick(()=>{
  console.log("nextTrick");
});

setTimeout(()=>{
  console.log("setTimeout");
},5000);

setImmediate(()=>{
  console.log("setImmediate");
});

console.log("end");