import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port:587,
    auth:{
        user:'ajaysonkar@gmail.com',
        pass: 'pvoarqkkdkjcskli'
    },
})

const sendOtpEmail =(to, otp)=>{
    const mailOption = {
        from: 'ajaysonkar@gmail.com',
        to: to,
        subject: 'Your OTP',
        text: `Your OTP code is ${otp}`,
    };

    return transporter.sendMail(mailOption);
};
export default sendOtpEmail