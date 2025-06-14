import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String, // String is shorthand for {type: String}
  password: String,
});
const User = mongoose.model("User", userSchema);
export default User;
