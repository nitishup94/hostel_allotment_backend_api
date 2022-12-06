const router=require('express').Router();
const StudentController=require('../controller/StudentRegController');
const updateController=require('../controller/studentupdate');
const mailConfig=require('../controller/sendmail');



//student registration router
router.post('/admin/student',StudentController.studentregister);


//student login routes 
router.post('/student/login',updateController.studentlogin);


//update and fetch data routes
router.get('/admin/studentinfo/:uid',updateController.fetchstudent);
router.put('/admin/studentroom/:email',updateController.room_update);

//alloted and not alloted student route
router.get('/admin/alloted/:uid',updateController.allotedstudent);
router.get('/admin/notalloted/:uid',updateController.not_allotedstudent);


//mailer routes for allotment, rejection or confirmation
router.post('/admin/mail',mailConfig.mailsend);
router.post('/admin/reject_mail',mailConfig.rejection_mail);
router.post('/admin/confirm_mail',mailConfig.confirmation_mail);



//Delete student data
router.delete('/admin/delete/:clgid',updateController.admin_delete);




//export router
module.exports=router;