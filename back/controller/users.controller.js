
import User from "../model/User.model.js";

 class UserController{


   async get(req,res) {

       const users = await User.find({}).exec()

       console.log(users);


    }

}


export default  UserController