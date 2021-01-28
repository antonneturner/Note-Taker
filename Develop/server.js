let express = require("express")
let app = express()
let port = process.env.PORT || 3000


// makes public folder url path
app.use(express.static("public"))

//data parsing - decrypting
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// put the clean and reader from original format to -  req.body, req.body will be used for your table or file when you create a new entry
let api = require("./routes/api")
let html = require("./routes/html")
app.use(api)
app.use(html)

app.listen(port, function () {
    console.log("app is listening on port " + port)
})

// 