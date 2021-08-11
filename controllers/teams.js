const teams = require('../teams')
const getAllTeams = (request, response) => {
    return response.send(teams)
}

const getTeamById = (request, response) => {
    let { id } = request.params

    id = Number(id)
    let team = teams.filter((item)=>{
        return item.id === id
    })
    if (teams.length > 0){
        return response.send(team[0])
    }
    else {
        throw new Error('item not found')
    }
}


module.exports = { getAllTeams, getTeamById }