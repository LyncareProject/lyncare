const moment = require("moment");
const db = require("../models");
const nodemailer = require('nodemailer');
const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD } = require('../common')

const transporter = nodemailer.createTransport({
    service: EMAIL_SERVICE,   // 메일 보내는 곳
    prot: 587,
    host: 'http://localhost:8080',  
    secure: false,  
    requireTLS: true ,
    auth: {
      user: EMAIL_USER,  // 보내는 메일의 주소
      pass: EMAIL_PASSWORD   // 보내는 메일의 비밀번호
    }
});

exports.postEmail = async (req, res) => {
    try {
        const { company, call, email, name, phone, desc } = req.body
        await transporter.sendMail({
            from: EMAIL_USER, // sender address
            to: "lyncare@lyncare.co.kr", // list of receivers
            subject: "Lyncare 문의가 왔습니다",
            html: `<p>company : ${ company }</p>
            <p>call : ${ call }</p> 
            <p>email : ${ email }</p> 
            <p>phone : ${ phone }</p> 
            <p>name : ${ name }</p> 
            <p>desc : ${ desc }</p>`, 
        })
        res.status(200).json({message : 'Success'})
    } catch(error){
        console.log(error)
    }  
}
