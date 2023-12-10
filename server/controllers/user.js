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
        if(! email || ! password) {

            return res.json({
                success:false,
                message:"Please enter valid email or password !"
            })
        }


        const findUser = await User.findOne({
            email:email,
            password:password
        }).select('email name')

      

        if(findUser){
            return res.json({
                success:true,
                data:findUser,
                message:"login successfull"
            })
        }else{
            return res.json({
                success:false,
                message:"invalid creditials"
            })
        }

    }
    catch(err){
       res.json({
        success:false,
        message:err.message
       })
    }
    
   
}
export {postApiSingup ,postApiLogin };