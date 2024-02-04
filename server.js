require('dotenv').config();

const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

app.listen(process.env.DB_LISTENING, ()=>{
    console.log("Database listening..")
})

app.post('/register', async (req,res) => {
    const checkDuplicateQuery = "SELECT * FROM user WHERE username = ?";
    const checkDuplicateQuery2 = "SELECT * FROM user WHERE email = ?";

    const result = await Promise.all([
        new Promise((resolve, reject) => {
            db.query(checkDuplicateQuery, [req.body.username], (checkErr, checkResult) => {
                if (checkErr) {
                    reject("Erro-1");
                }

                if (checkResult.length > 0) {
                    resolve("Warning-1");
                } else {
                    resolve(null);
                }
            });
        }),
        new Promise((resolve, reject) => {
            db.query(checkDuplicateQuery2, [req.body.email], (checkErr2, checkResult2) => {
                if (checkErr2) {
                    reject("Erro-2");
                }
            
                if (checkResult2.length > 0) {
                    resolve("Warning-2");
                } else {
                    resolve(null);
                }
            });
        })
    ]);

    if (result.includes("Warning-1") && result.includes("Warning-2")) {
        return res.json("Warning-3");
    }else if (result.includes("Warning-1")) {
        return res.json("Warning-1");
    } else if (result.includes("Warning-2")) {
        return res.json("Warning-2")
    }else{
        const sql = "INSERT INTO user (`username`,`password`,`email`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.password,
            req.body.email
        ]
       
        db.query(sql, [values], (err,data) => {
            if(err){
                //Erro: Impossible to insert values! Error-3
                return res.json("Error-3");
            }
            return res.json(data);
        })
    }
})

app.post('/login', (req,res) => {
    const sql = "SELECT * FROM user WHERE `username` = ? AND `password` = ?";
    
    db.query(sql, [req.body.username,req.body.password], (err,data) => {
        if(err){
            return res.json("Error");
        }

        if(data.length > 0){
            req.session.username = req.body.username;
            return res.json("Success");
        }else{
            return res.json("Fail");
        }
    })
})
