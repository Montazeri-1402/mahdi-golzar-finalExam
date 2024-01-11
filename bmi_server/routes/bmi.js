var express = require('express');
var router = express.Router();

let db =  [{age: 18, gender: 'male', height: 175, weight: 75}] 
router.get('/', function (req, res, next) {
    let cmConvertToMeter = db[0].height / 100
    let calculateBmi = db[0].weight / Math.pow(cmConvertToMeter, 2)
    console.log(calculateBmi);
});

module.exports = router;
