import { EventEmitter } from "node:events";

function createDOMElement() { 
  const emitter = new EventEmitter();


return{
  addEventListener: function (eventName, callback) {
    emitter.on(eventName, callback);
},

removeEventListener: function (eventName, callback) {
  emitter.off(eventName, callback);
},

dispatchEvent(event){
  emitter.emit(event.type, event);
},
};
}

const button = createDOMElement();
button.addEventListener("click",()=>{
  console.log("Button clicked!");
})



button.addEventListener("click", handleClickEvent);

button.dispatchEvent({
  type: "click",
})

button.removeEventListener("click", handleClickEvent);

function handleClickEvent(event) {
  console.log("Data Saved Successfully")

}

button.dispatchEvent({
  type:"save",
})

button.addEventListener("click",handleClickEvent);`3`