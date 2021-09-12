const express = require('express')
const router = express()

//APIs under controllers folder
router.use('/customerController', require('./customerController'));

//Router for Index Page
router.get('/', (req, res) => {
    res.render('pages/index')
})

//Router for specific URL pages
router.get('/:page', (req, res) => {
    res.render(`pages/${req.params.page}`);
})

module.exports = router