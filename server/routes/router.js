const express = require("express")

const router = express.Router()
const users = require("../models/userSchema")






// router.get("/",(req,res)=>{
//     console.log("connect");
// })



//register user
router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const{name,email,age,mobile,work,address,desc} = req.body

    if(!name || !email || !age || !mobile || !work || !address || !desc)
    {
        res.status(404).json("Please fill all the data")
    }


    try{
        const preUser = await users.findOne({email:email})
        console.log(preUser);

        if(preUser){
            res.status(404).json("User already registered")
            
        }
        else{
            const addUser = new users({
                name,email,age,mobile,work,address,desc
            })

            await addUser.save()
            res.status(201).json(addUser)
            console.log(addUser)

        }
    }catch(error){
        res.status(404).json(error)
    }
})


//get user data
router.get("/getdata",async(req,res)=>{
    try{
        const userData = await users.find()
        res.status(201).json(userData)
        console.log(userData);
    }catch(error){
        res.status(404).json(error)
    }
})


//get indivisual user
router.get("/getuser/:id",async(req,res)=>{
    try{
        // console.log(req.params);
        const {id} = req.params

        const userindivisual = await users.findById({_id:id})
        console.log(userindivisual)
        res.status(201).json(userindivisual)

    }catch(error){
        res.status(404).json(error)
    }
})


//update user data
router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const {id} = req.params

        const updateuser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        
        })

        console.log((updateuser));
        res.status(201).json(updateuser)
    }
    catch(error){
        res.status(404).json(error)
    }
})



//delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    
    try{
        const {id} = req.params

        const deleteuser = await users.findByIdAndDelete({_id:id})
        console.log(deleteuser)
        res.status(201).json(deleteuser)
        
    }
    catch(error){
        res.status(404).json(error)
    }
})

module.exports = router