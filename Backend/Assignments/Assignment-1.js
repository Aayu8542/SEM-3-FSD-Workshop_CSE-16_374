import fs from 'node:fs/promises';
const filepath = "data.jason";
async function createfile (content){
  try{
 await fs.writeFile(filepath, content, "utf8");
 console.log("File created successfully");
} catch (err) {
  console.error("Error creating file:", err);
}
async function readfile (){
  try {
    const data = await fs.readFile(filepath, "utf8");
    console.log("File content:", data);
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
  }
}
}
function uploadfile (){
  
}
function deletefile (){
  
}


createfile("Hello, this is a sample file content.");
await readfile();



