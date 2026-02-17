// const fs=require('fs');

// fs.writeFile('./a1','A1',()=>{ });
// fs.writeFile('./b1','B1',()=>{ });
// fs.writeFile('./c1','C1',()=>{ });
// fs.writeFileSync('./d1','D1');
// fs.writeFileSync('./e1','E1');


// const result=fs.readFileSync('./abes.txt','utf-8');
// console.log(result);


// fs.readFile('./a1','utf-8',(err,result2)=>{
//     if(err){
//         console.log('Error',err);
//     }
//     else{
//         console.log(result2);
//     }
// });

// fs.readFile('./b1','utf-8',(err,result3)=>{
//     if(err){
//         console.log('Error',err);
//     }
//     else{
//         console.log(result3);
//     }
// });

// fs.readFile('./c1','utf-8',(err,result4)=>{
//     if(err){
//         console.log('Error',err);       
//     }
//     else{
//         console.log(result4);
//     }
// });

// fs.readFileSync('./d1','utf-8');
// const result5=fs.readFileSync('./d1','utf-8');
// console.log(result5);

// fs.readFileSync('./e1','utf-8');
// const result6=fs.readFileSync('./e1','utf-8');
// console.log(result6);

//  fs.appendFile('./a1','\n pranav',(err)=>{
//     if(err){
//         console.log('Error',err);
//     }   
//     else{
//         console.log('Data appended successfully');
//     }
// });

//fs.cpSync('./a1','./c1');
// fs.copyFile('./b1','./c1',(err)=>{
//     if(err){
//         console.log('Error',err);
//     }
//     else{
//         console.log('File copied successfully');
//     }
// });



// const fs = require('fs');

// if (fs.existsSync('./abes.txt')) {
//     const result = fs.readFileSync('./abes.txt', 'utf-8');
//     console.log(result);

//     fs.unlinkSync('./abes.txt');
//     console.log("File deleted successfully");
// } else {
//     console.log("File does not exist");
// }

// fs.unlink("./ds-b.txt",(err)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log("data delete")
//     }
// })


//os module
const os = require('os');

console.log("system platform",os.platform());
console.log("user info",os.userInfo()); // info of the current user
console.log("CPU",os.arch());
console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());
console.log("uptime",os.uptime());   // restarting time of the system
console.log("homedir".os.homedir());  // where the directory exists
console.log("host name", os.hostname()); // remote name
