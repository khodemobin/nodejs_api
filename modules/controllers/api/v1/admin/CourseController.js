const config = require('./../../../../config');
const Controller = require(`${config.path.controller.api}/Controller`);

module.exports = new class CourseController extends Controller {

    index(req, res) {
        this.model.Course.find({}, (err, courses) => {
            if (err) throw err;
            if (courses) {
                return res.json(courses);
            }
        });
    }

    single(req, res) {

    }

    store(req, res) {
        //Validation
        req.checkBody('title', 'عنوان نمیتواند خالی بماند').notEmpty();
        req.checkBody('body', 'متن نمیتواند خالی بماند').notEmpty();
        req.checkBody('iamge', 'عکس نمیتواند خالی بماند').notEmpty();
        req.checkBody('price', 'قیمت نمیتواند خالی بماند').notEmpty();

        this.escapeAndTrim(req, 'title price image')
        if (this.showValidationErrors(req, res))
            return;

        let newCourse = new this.model.Course({
            title: req.body.title,
            body: req.body.body,
            image: req.body.image,
            price: req.body.price,
        }).save(err => {
            if (err) throw err;
            req.json("course create");
        });
    }

    update(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Course.findByIdAndUpdate(req.params.id, {
            title: "course three",
        }, (err, course) => {
            if (err) throw err;  
            res.json("success");
        });
    }

    destroy(req, res) {
        this.model.Course.findByIdAndRemove(req.params.id, (err, course) => {
            if (err) throw err;
            res.json("success");
        });
    }
}