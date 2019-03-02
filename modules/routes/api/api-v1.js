const express = require('express');
const router = express.Router();
const adminRouter = express.Router();
const config = require('./../../../modules/config');
const {
    api: apiDir
} = config.path.controller;

const HomeController = require(`${apiDir}/v1/HomeController`);
const AdminCourseController = require(`${apiDir}/v1/Admin/CourseController`);




router.get('/', HomeController.index);
//< admin routes
adminRouter.get('/courses', AdminCourseController.index.bind(AdminCourseController));
adminRouter.get('/courses/:id', AdminCourseController.single);
adminRouter.post('/courses', AdminCourseController.store.bind(AdminCourseController));
adminRouter.put('/courses/:id', AdminCourseController.update);
adminRouter.delete('/courses/:id', AdminCourseController.destroy);
router.use('/admin', adminRouter);
//>


module.exports = router;