const Auth = async () =>{
    const user = JSON.parse(localStorage.getItem("user" || '{}')) 
 if(!user){
     alert("please login !");
     window.location.href ='/login'
 }
 }
 export default Auth;