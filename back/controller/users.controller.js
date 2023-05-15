
import User from "../model/User.model.js";

 class UserController{


   async get(req,res) {

       const users = await User.find({}).exec()

       
       console.log(users);


    }
   async post(req,res) {

        const user = req.body

        console.log(user);

       const users =  new User(user)

       
       console.log(users);

       users.save()


    }

}


export default  UserController