import fs from "fs";
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    const dir = fs.readdirSync("./jody");

    console.log(dir)

    res.status(200).json(dir)
})

app.listen(3000, () => {
    console.log("Listening localhost:3000")
})