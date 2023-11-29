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
export {postApiSingup};