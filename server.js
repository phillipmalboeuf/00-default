const PORT = process.env.PORT || 8080
const express = require("express")
 
const app = express()

app.all('*', function (req, res, next) {
	res.sendStatus(410)
})

app.listen(PORT)