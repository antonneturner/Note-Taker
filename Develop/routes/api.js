let router = require("express").Router()
let db = require("../db/db.json")
let fs = require("fs")

router.get("/api/notes", function (req, res) {

    res.json(db)

})

let id = 1
router.post("/api/notes", function (req, res) {

    let notesData = req.body
    notesData.id = id
    id++;
    db.push(notesData)
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
        res.json(db)
    })

})
router.delete("/api/notes/:id", function (req, res) {
    let idToDelete = req.params.id
    for (var i = 0; i < db.length; i++) {
        if (idToDelete == db[i].id) {
            db.splice(i, 1)

            fs.writeFile("./db/db.json", JSON.stringify(db), function () {
                res.json(db)
            })


        }

    }




    db

})

module.exports = router