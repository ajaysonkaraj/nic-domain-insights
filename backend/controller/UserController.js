import prisma from "../DB/db.config.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

// creating new user
export const createUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    //finding user in database
    if (findUser) {
      return res.json({
        status: 400,
        message: "Email already Taken. Please use another email !!",
      });
    }
    //creating new user on DB

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: email,
        fullname: fullname,
        password: hashedPassword,
      },
    });

    return res.json({
      status: 200,
      data: newUser,
      message: "You are registered successfully !!",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

// login method
export const loginUser = async (req, res) => {
  const secretKey= "ajay";
  try {
    const { email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!findUser) {
      return res
        .status(400)
        .json({status:400, message: "Invalid username or password !!" });
    }
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({status:400, message: "Invalid username or password !!" });
    }

    if(findUser && isMatch)
      {
        const token = jwt.sign({userId:findUser.id , email:findUser.email},secretKey, {expiresIn: "1h"} );
        return res.status(200).json({
          message: "Login successful !!",token,
          data: {
            _id: findUser._id,
            fullname: findUser.fullname,
            email: findUser.email,
          },
        });
      }
  } catch (error) {
    console.log("Error : " + error.message);
    res.status(500).json({status:500, message: "Internal server error !!" });
  }
};

// Update user method
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { fullname, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updateUser = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        fullname: fullname,
        email: email,
        password: hashedPassword,
      },
    });
    return res.status(200).json({
      status: 200,
      data: updateUser,
      message: "Updated succssefully!!",
    });
  } catch (error) {
    console.log("Error : " + error.message);
    return res.status(500).json({ message: "Internal server error !!" });
  }
};

// * show only one uesr
export const showUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await prisma.user.findFirst({
      where: {
        id: Number(userId),
      },
    });
    return res.json({ status: 200, data: user });
  } catch (error) {
    return res.json({ status: 500, message: error });
  }
};

// fetch the users in table
export const fetchUsers = async (req, res) => {
  const users = await prisma.user.findMany({});

  return res.json({ status: 200, data: users });
};

// * Delete the user
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    });
    return res.json({ status: 200, message: "User delete successfully!!" });
  } catch (error) {
    return res.json({ status: 500, message: error });
  }
};
