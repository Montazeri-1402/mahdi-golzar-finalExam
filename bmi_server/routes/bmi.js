var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


router.get('/', async function (req, res, next) {
    let db = req.body;
    let cmConvertToMeter = db.height / 100
    let calculateBmi = db.weight / Math.pow(cmConvertToMeter, 2)
   
    db.ip = req.ip

    const createdchat = await prisma.userBmi.create({
        data: db,
    })

    res.send(createdchat);




});

module.exports = router;
