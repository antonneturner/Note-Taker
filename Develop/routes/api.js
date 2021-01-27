let router = require("express").Router()
let db = require("../db/db.json")
let fs = require("fs")

router.get("/api/notes", function (req, res) {

    res.json(db)

})


router.post("/api/notes", function (req, res) {

    let notesData = req.body

    db.push(notesData)
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
        res.json(db)
    })

    router.delete("/api/notes", function (req, res) {

        let notesData = req.body

        db

    })


    module.exports = router