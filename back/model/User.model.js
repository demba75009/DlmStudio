import mongoose from "mongoose";
const schema = mongoose.Schema;

const user = schema({

  
    Username:String,
    Email: String,
    Password: String,
  
  
});



const User = mongoose.model("Users", user);

export default User;