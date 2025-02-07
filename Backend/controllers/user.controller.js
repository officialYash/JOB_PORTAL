import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req,res)=>{
    try {
        const {fullname,email,phoneNumber,password,role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({message:"Something is missing",success:false});
        };
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists with email", success:false});
        }
        const hashedPassword = await bcrypt.hash(password,10);

    await User.create({
        fullname,
        email,
        phoneNumber,
        password:hashedPassword,
        role, 
    })
    } catch (error) {
        
    }

}
 
export const login = async(req,res)=>{
    try {
        const {email,password,role} = req.body;
        if(!email || !password || !role){
            return res.status(400).json({message:"Something is missing",success:false});
        };
    
    const user = await User.findOne({email}); 
    if(!user){
        return res.status(400).json({message:"Incorrect Email or Password",success:false});
    }
    const isPasswordMatch = await bcrypt.compare(password,user.password);
    if(!isPasswordMatch){
        return res.status(400).json({message:"Incorrect Email or Password",success:false});
    }
    //check a role is correct or not 
    if(role !== user.role){
        return res.status(400).json({message:"Account doesn't  exist with current role",success:false});
    }
  } catch(error) {
        
    }
}