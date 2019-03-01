const config = require('./../../config');
const Course = require(`${config.path.model}/course`);

module.exports = class Controller {
    constructor() {
        this.model = {
            Course
        };
    }
}