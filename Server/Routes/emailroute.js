import express from "express";
import controller from '../Controller/otpController.js'
import middleware from "../Middleware/middleware.js";
const route = express.Router()


route.post('/reset-password',controller.resetPassword) 
route.post('/reset-password/:otp',controller.resetPasswordConfirm)
route.post('/new-password/',middleware.verifyToken,controller.newPassword)

//route.post('/auth-token',controller.authenticate) // To get jwt token
//route.post('/verify-token',controller.verifyToken) // To verify jwt token

export default route