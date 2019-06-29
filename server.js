const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const DB = require('./models');
const { Landlord, Tenant, Apartment} = DB;
const jwt_secret = "I am a secret key"
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001
app.post("/tenant/register", async (req, res) => {
    const { first_name, last_name, email, password} = req.body
    try{
        let tenant = await Tenant.findOne({
            where: {
                email
            }
        }) 
        if(tenant){
            return res.status(400).send({
                error: "Tenant already exist"
            })
        }

        tenant = await Tenant.create({
            first_name,
            last_name,
            email,
            password
        })

        return res.send({
            message: "Tenant has been successfully Registered",
            data: tenant
        })

    }catch(e){
        return res.status(500).send({
            error: e.message
        })
    }
})

app.post("/landlord/register", async (req, res) => {
    const { first_name, last_name, email, password} = req.body
    try{
        let landlord = await Landlord.findOne({
            where: {
                email
            }
        }) 
        if(landlord){
            return res.status(400).send({
                error: "Landlord already exist"
            })
        }

        landlord = await Landlord.create({
            first_name,
            last_name,
            email,
            password
        })

        return res.send({
            message: "Landlord has been successfully Registered",
            data: landlord
        })

    }catch(e){
        return res.status(500).send({
            error: e.message
        })
    }
})

app.post("/tenant/login", async (req, res) => {
    const { email, password } = req.body;
    const tenant = await Tenant.findOne({
        where: {
            email
        }
    })

    if(!tenant){
        return res.status(404).send({
            error: "Tenant does not exist"
        })
    }

    if(tenant.password !== password){
        return res.status(401).send({
            error: "Invalid password supplied"
        })
    }

    delete tenant.password;

    const token = jwt.sign({role: "tenant", email: tenant.email },jwt_secret)

    return res.send({
        message: "login successfull",
        token
    })

})

app.post("/landlord/login", async (req, res) => {
    const { email, password } = req.body;
    const landlord = await Landlord.findOne({
        where: {
            email
        }
    })

    if(!landlord){
        return res.status(404).send({
            error: "Landlord does not exist"
        })
    }

    if(landlord.password !== password){
        return res.status(401).send({
            error: "Invalid password supplied"
        })
    }

    delete landlord.password;

    const token = jwt.sign({role: "landlord", email: landlord.email },jwt_secret)

    return res.send({
        message: "login successfull",
        token
    })
})


app.listen(PORT, ()=> {
    console.log("======server started")
})