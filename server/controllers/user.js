import User from '../models/User.js'

const postApiSingup = async (req,res) => {
    const {name, email,password, gender, mobile} = req.body;

    const singup = new User ({
        name:name,
        email:email,
        password:password,
        gender:gender,
        mobile:mobile
    })
    try{
        const saveUser =await singup.save();
        res.json({
        sucess:true,
        data:saveUser,
        message:"Successfully save user"
    })
    }
    catch(err){
        res.json({
            sucess:true,
            message:err.message
        })
    }
    
}

const postApiLogin = async (req,res) => {
    const{email,password} =req.body;

    try{
        if(!email || !password) {
            return res.json({
                success:false,
                messgage:"Plese enter valid email or paddword !"
            })
        }
        const findUser = await User.findOne({
            email:email,
            password:password
        }).select('name email mobile gender')
        if(!findUser){
            res.json({
               success:false,
               message:'User not found'
             })
        }
        res.json({
            success:true,
            data:findUser,
            message:'Successfully login user'
        })
    }
    catch(err){
        res.json({
            success:false,
            message:err.message
        })
    }
    
   
}
export {postApiSingup ,postApiLogin };