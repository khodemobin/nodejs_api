const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Welcome To Home');
});
router.get('/about', (req, res) => {
    res.json("Welcome To About");
})

module.exports = router;