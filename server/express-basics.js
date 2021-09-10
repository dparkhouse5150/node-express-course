const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('Home page')
})

router.get('/about', (req, res) => {
    res.status(200).send('About page')
})

router.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('Home page')
})

router.get('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server litening on port 5000')
})

module.exports = router