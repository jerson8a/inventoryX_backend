const express = require("express");
const cors = require('cors');
const DB = require('../dbprocedures');
const auth = require('../authProcedures');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send("Hello from node API Server")
});

app.post('/register', (req, res) => {
    try {
        auth.createUserEmail(req.body.email, req.body.password)
        .then((response) => {
            if (response.code != '0') {
                // Registrar en BD
                DB.insertUser(response.code, req.body.firstName, req.body.lastName, req.body.email)
                .then((responseDB) => {
                    res.status(201).json(responseDB)
                })
            } else {
                res.status(400).json({
                    code: '0',
                    message: 'El correo electrónico indicado ya existe'
                })
            }
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/categories', (req, res) => {
    try {
        DB.getCategories()
        .then((responseDB) => {
            res.status(200).json(responseDB)
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})