const express=require('express')
const {v4:uuidv4}=require('uuid');
const validator=require('validator');
const app=express();
app.use(express.json());
const users=new Map()
app.post('/users',(req,res)=>{
   const {name,email,age}=req.body;

if(!name||!email||!age){
  return res.status(400).json({error: "all fields required"})
  
}
if(!validator.isEmail(email)){
    return res.status(400).json({error:"email should be proper"})
}
if(isNaN(age)||age<=0){
    return res.status(400).json({error:"age should be proper"})
}

const id=uuidv4()
const user={id,name,email,age}
users.set(id,user)

return res.status(201).json(user)
})
app.get('/users',(req,res)=>{
    return res.json(Array.from(users.values()))
})
app.get('/users/:id',(req,res)=>{
    const user=users.get(req.params.id)
    if(!user){
        return res.status(404).json({error:"user is not valid"});
    }
    else{
        return res.json(user);
    }
})
app.put('/users/:id',(req,res)=>{
    const {name,email,age}=req.body
       const user=users.get(req.params.id)
if(!user){
    return res.status(400).json({error:"user not found"})
}
if(!email&&validator.isEmail(email)){
    return res.status(400).json({error:"email is not valid"})
}
if(age&&isNaN(age)||age<=0){
    return res.status(400).json({error:"age must be valid"})
}
if(name)user.name=name
if(email)user.email=email
if(age)user.age=age
users.set(req.params.id,user)
return res.json(user)
})
app.delete('/users/:id',(req,res)=>{
    if(!users.has(req.params.id)){
        return res.status(400).json({error:"user not found"});
    }
    users.delete(req.params.id)
    return res.status(204).send();
})
app.get('/',(req,res)=>{
    res.send("welcome to the page")
})
const port =3000;
app.listen(port,()=>{
    console.log(`server starting at http://localhost:${port}`)
})
