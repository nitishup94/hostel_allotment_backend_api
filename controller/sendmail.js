
require('dotenv').config();
const nodemailer = require("nodemailer");


 //email configuration
const transporter = nodemailer.createTransport({
        service: 'Gmail',
          auth: {
            user: process.env.EMAIL_ID, 
            pass: process.env.PASSWORD, 
          },
        });


        
//allotment mail
const mailsend = async (req, res) => {
    try {
          // send mail with defined transport object
          const info = await transporter.sendMail({
            from: '"Nitish Upadhyay" <nitishcse2023@gmail.com>',
            to: req.body.email, 
            subject: "Hostel Allotment Confirmation", 
            html: `<b>Dear ${req.body.name},</b><br><b> Congratulations on Successfully hostel allotment!</b><p> Your Room No is :<b> ${req.body.room}</b></p><br><p>You can also login on website to check status of allotment.</p><br><b>Username: ${req.body.email}</b><br><b>Password: ${req.body.pass}</b><br>
            <br>
            <p>Thanks & Regards,</p>
            <br>
            <b>Warden</b> `,
          });

        res.send(info);
      } catch (error) {
        res.send({ message: error });
      }
}


//rejection mail
const rejection_mail = async (req, res) => {
  try {
 
        // send mail with defined transport object
        const reject_emails = await transporter.sendMail({
          from: '"Nitish Upadhyay" <nitishcse2023@gmail.com>',
          to: req.body.email, 
          subject: "Hostel Allotment Confirmation", 
          html: `<b>Dear ${req.body.name},</b><br><b>Unfortunately, no rooms available for hostel allotment!</b>
          <br>
          <p>Thanks & Regards,</p>
          <b>Warden</b> `,
        });

      res.send(reject_emails);
    } catch (error) {
      res.send({ message: error });
    }
}


//admin confirmation mail
const confirmation_mail = async (req, res) => {
  try {
 
        // send mail with defined transport object
        const confirmation_emails = await transporter.sendMail({
          from: '"Nitish Upadhyay" <nitishcse2023@gmail.com>',
          to: req.body.email, 
          subject: "Hostel Registration Confirmation", 
          html: `<b>Dear ${req.body.name},</b><br><b style="color:green">Your college profile has been successfully created !</b>
          <br> <p>College Name : ${req.body.college}</p>
          <p>Thanks & Regards,</p>
          <b>Admin</b> `,
        });

      res.send(confirmation_emails);
    } catch (error) {
      res.send({ message: error });
    }
}


//module export

module.exports={
  mailsend,
  rejection_mail,
  confirmation_mail
}