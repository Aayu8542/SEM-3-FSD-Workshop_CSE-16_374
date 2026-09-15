// import express from 'express';
// const app = express();
// app.use(express.json());
// const userData =[
//   {
//     id : 101,
//     name : 'cm',
//     email: 'dcgdi@gmail.com',
//   }
// ];
// app.get("/msg",(req,res)=>{
//   res.status(200).json({
//     message: "welcome user",
//   })
// });
// app.post("/user",(req,res)=>{
//   res.status(200).json({
//     message: "user added successfully",
//   })
// });
// app.put("/user/:id",(req,res)=>{
//   res.status(200).json({
//     message: "user updated successfully",
//   })
// });
// app.delete("/user/:id",(req,res)=>{
//   res.status(200).json({
//     message: "user deleted successfully",
//   });
//   userData.push(user);

// app.listen(3010, () => {
//   console.log("Server is running on port 3010")
// })

import express from 'express';

const app = express();
app.use(express.json());

const userData = [
  { id: 101, name: 'cm', email: 'dcgdi@gmail.com' }
];

app.get("/msg", (req, res) => {
  res.status(200).json({ message: "welcome user" });
});

app.post("/user", (req, res) => {
  res.status(200).json({ message: "user added successfully" });
});

app.put("/user/:id", (req, res) => {
  res.status(200).json({ message: 'user updated successfully' });
});

app.delete("/user/:id", (req, res) => {
  res.status(200).json({ message: 'user deleted successfully' });
});

app.get("/user", (req,res)=> {
  res.status(200).json({
    message: "Data recieved",
    data: userData,
  })
});

app.post("/create",(req,res)=> {
  const {id, name, email} = req.body;
  const newuser = { id, name, email };
  userData.push(newuser);
  res.status(201).json({message : "User created successfully",data: newuser});//only id use newuser.id.
});

app.put("edit/:id",(req,res)=>{
  const id = req.params.id;
  const index = userData.findIndex(user => user.id == id);
  if (index !== -1) {
    return res.send("User not found");
  }
  const { name, email } = req.body;
  userData[index] = { ...userData[index], name, email };
  res.status(200).json({ message: "User updated successfully", data: userData[index] });


});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

