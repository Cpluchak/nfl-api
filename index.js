const express = require('express')
const { getAllTeams, getTeamById } = require('./controllers/teams')
const app = express()
const port = 7000

app.get('/teams', getAllTeams)
app.get('/teams/:id', getTeamById)

app.listen(port, function () {
    console.log('listening on port 7000')
})
