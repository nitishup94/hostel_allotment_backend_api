const router=require('express').Router();
const adminController=require('../controller/adminRouteController');
const adminupdate=require('../controller/adminupdate');


//Admin Registration routes
router.post('/admin',adminController.adminregister);



//Admin Login routes
router.get('/admin/login/:email',adminController.adminlogin);


//update and fetch data routes
router.get('/admin/fetchsetting/:uid',adminupdate.fetchsetting);
router.put('/admin/updatesetting/:id',adminupdate.setting_update);



//export router
module.exports=router;