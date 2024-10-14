const express = require("express");
const userController = require("../controllers/usersCtrl.js");
const isAuthenticated = require("../middlewares/isAuth.js");

const userRouter = express.Router();
userRouter.post("/api/v1/users/register", userController.register);
//! Login
userRouter.post("/api/v1/users/login", userController.login);
//! Profile
userRouter.get(
  "/api/v1/users/profile",
  isAuthenticated,
  userController.profile
);
//!change password
userRouter.put(
  "/api/v1/users/change-password",
  isAuthenticated,
  userController.changeUserPassword
);
//!update profile
userRouter.put(
  "/api/v1/users/update-profile",
  isAuthenticated,
  userController.updateUserProfile
);

module.exports = userRouter;
