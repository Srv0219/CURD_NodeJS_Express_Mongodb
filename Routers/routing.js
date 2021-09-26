const express = require('express');
const router = express.Router();
const Srvdetail = require('../Models/srv')



router.get('/', async (req, res) => {
    // res.send('Get request');
    try {
        const Srv = await Srvdetail.find()
        res.json(Srv)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.get('/:id', async (req, res) => {
    // res.send('Get request');
    try {
        const Id = await Srvdetail.findById(req.params.id)
        if (Id==null) {
             res.send("Id not found")
        }else{
            res.json(Id)
           
        }
        
    } catch (err) {
        res.send('Error' + err)
    }
})


router.patch('/:id', async (req, res) => {
    // res.send('Get request');
    try {
        const change = await Srvdetail.findById(req.params.id)
        change.age=req.body.age
        const a1 = await change.save()
            res.json(a1)


    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async (req, res) => {
    // res.send('Get request');
    const add = new Srvdetail({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    });

    try {
        const a1 = await add.save()
        res.json(a1)
    } catch (err) {
        res.send('Error' + err)
    }
})

module.exports = router;