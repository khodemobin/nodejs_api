const config = require('./../../../config');
const Controller = require(`${config.path.controller.api}/Controller`);
const CourseTransform = require(`${config.path.transform}/v1/CourseTransform`)

module.exports = new class CourseController extends Controller {
    index(req, res) {
        this.model.Course.find({}, (err, courses) => {
            if (err) throw err;
            if (courses) {
                return res.json({
                    data: new CourseTransform().transformCollection(courses),
                    status: 'success'
                })
            }
            res.json({
                status: "notfound"
            })
        });
    }
}