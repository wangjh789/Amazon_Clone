import express from "express"
import data from "../data.js";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get('/seed', 
    expressAsyncHandler( async(req,res)=>{
    await User.remove({});
    const createUsers = await User.insertMany(data.users);
    res.send({createUsers});
})
)

userRouter.post('/signin',expressAsyncHandler(async (req,res)=>{
    const user = await User.findOne({email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password,user.password)){
            res.send({
                _id:user.id,
                name : user.name,
                email:user.email,
                isAdmin : user.isAdmin,
                token : generateToken(user)
            })
            return; //정상적인 로그인
        }
    }
    res.status(401).send({message: "Invaild email or password"})
}))

userRouter.post("/register", expressAsyncHandler(async(req,res)=>{
    const user = new User({
        name: req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,8)
    });
    const createdUser = await user.save()
    res.send({
        _id:createdUser.id,
        name : createdUser.name,
        email:createdUser.email,
        isAdmin : createdUser.isAdmin,
        token : generateToken(createdUser)
    })
}))

export default userRouter;