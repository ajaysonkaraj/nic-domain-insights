import express from "express";
import sendOtpEmail from "../controller/EmailOTPController.js";

const router = express.Router();

router.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  try {
    await sendOtpEmail(email, otp);

    res.status(200).send({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).send({ message: "Failed to send OTP", error });
  }
});

export default router;
