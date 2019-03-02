const config = require('./../../config');
const Course = require(`${config.path.model}/course`);

module.exports = class Controller {
    constructor() {
        this.model = {
            Course
        };
    }

    showValidationErrors(req, res) {
        let errors = req.validationErrors();
        if (errors) {
            res.status(422).json({
                message: errors.map(error => {
                    return {
                        'field': error.param,
                        'message': error.msg
                    }
                }),
                status: "error"
            });
            return true;
        }
        return false;
    }

    escapeAndTrim(req, items) {
        items.split(' ').forEach(element => {
            req.sanitize(element).escape();
            req.sanitize(element).trim();
        });
    }
}