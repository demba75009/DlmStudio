
import User from "../model/User.model.js";

 class UserController{


   async get(req,res) {

       const users = await User.find({}).exec()

       
       console.log(users);


    }
   async post(req,res) {

        const user = req.body


       const users =  new User(user)
       users.save()

       console.log(users);
     return  res.json( users)

       
    }

}


export default  UserController