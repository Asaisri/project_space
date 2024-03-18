const UserData = require('../../models/user');

const AddUserData = async(req, res, next) => {
  const {name, email, password} = req.body.usrdata;
  let existingUser;
  try{
  existingUser = await UserData.findOne({email});
  }catch(err){
  return console.log(err)
  }
  if(existingUser){
  return res.status(400).json({message:"User Already Exists! Login Instead."})
  }
  const user = new UserData({
  name,
  email,
  password
  })
  try{
  await user.save()
  }catch(err){
  return console.log(err)
  }
  return res.status(201).json({user})
  }
//controller code to get all data from database.
const GetUserData = async(req,res, next) => {
  let users;
  try{
  users = await UserData.find();
  }catch(err){
  return console.log(err)
  }
  if(!users){
  return res.status(400).json({message:"No Users Found."})
  }
  return res.status(201).json({users})
  }
  //controller code to get single record of data by Id from database.
const UserDataById = async (req, res, next) => {
  const _id = req.params.id;
  await UserData.findById(_id)
  .then((response) => {
  res.status(200).json({msg:"successfully fetched single data",response});
  })
  .catch((error) => console.log(error));
  };
exports.AddUserData = AddUserData;
exports.GetUserData = GetUserData;
exports.UserDataById = UserDataById;