const express = require('express')
    , router = express.Router()
    , getModel = require('../models/customerModel')

router.get("/fetchCustomer", async(req, res) => {
    try {

        const result = await getModel.fetchCustomer() //req.body?
        res.send(result);

    } catch (error) {

        console.log(`Error in customer/fetchCustomer Controller: ${error}`);
        res.status(500).send(error);

    }
})

router.post("/fetchCustomerProducts", async(req, res) => {
    try {

        const result = await getModel.fetchCustomerProducts(req.body) //req.body?
        res.send(result);

    } catch (error) {

        console.log(`Error in customer/fetchCustomerProducts Controller: ${error}`);
        res.status(500).send(error);

    }
})

module.exports = router;