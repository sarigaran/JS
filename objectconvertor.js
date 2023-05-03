const object = {type:"Defender", model:2010, color:"red",a:2,}
let val = Object.values(object);
let len=object.length;
val.forEach((obj) =>{ 
 let key= Object.keys(object);   
if(typeof(obj)=="string")
{console.log(obj+" AB")}

else if(typeof(obj)=="number") { console.log(obj+1) }

else if(typeof(obj)=="object"){
for(let i=0;i<len;i++){
   if(typeof(obj)=="string")
{console.log(obj+" AB")}
   else if(typeof(obj)=="number") { console.log(obj+1) }
}}
else{ console.log("enter the one") }
}
);
