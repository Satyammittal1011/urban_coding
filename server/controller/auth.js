const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const crypto = require("crypto")
secret_key = "urbancoding";
const { validateEmail } = require("../helper/emailvalidation");
const { getUserByEmail, CreateUser, CreateAuthUser, getUserPassword } = require("../models/auth");
const { get } = require("../routes/auth");

async function registration(req, res) {
  const { name, email, phone, password, college_name } = req.body;
  if (!name || !email || !password || !phone || !college_name) {
    return res.send("not getting data from user end ");
  }
  if (validateEmail(email)) {
    const already_register = await getUserByEmail(email);
    console.log("alreadyyyyyyyyyy",already_register)
    if (already_register !== undefined) {
      return res.send("this email is already is use ");
    } else {
      const HashPassword = crypto
                    .createHash("sha256")
                    .update(password)
                    .digest("hex");
      const new_user = await CreateUser(
        name,
        email,
        phone,
        college_name,
      );
      const authUser = await CreateAuthUser(email,HashPassword)
      if (new_user) {
        return res.send("user is successfully created");
      } else {
        res.send("error 500");
      }
    }
  }
}

async function login(req,res) {
    const {email, password} = req.body
    const User = await getUserByEmail(email)
    if (User === undefined){
        return res.send("this email is not registerd on urban_coding")
    }
    else{
        const UserPassowrd = crypto
                .createHash("sha256")
                .update(password)
                .digest("hex");
        const response = await getUserPassword(email)
        const HashPassword = response["hashpassword"]
        if (UserPassowrd === HashPassword){
            const UserToken = jwt.sign(User.userd,secret_key)
            return res.send(UserToken)
        }
        else{
            return res.send("Wrong password")
        }
       
    }

}
module.exports = { registration, login };
