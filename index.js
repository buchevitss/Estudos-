const axios = require('axios')
const readline = require('readline-sync')

async function start(){
    const pokemon = procuraPokemon()
    const api = await returnJSON(pokemon)
    const habilidade_1 = api.data.abilities[0].ability.name
    const habilidade_2 = api.data.abilities[1].ability.name
    const peso = api.data.weight
    console.log(
        `
        Pokemon: ${pokemon}
        Habilidade 1: ${habilidade_1}
        Habilidade 2: ${habilidade_2}
        Peso: ${peso}`
    )

}

async function returnJSON(pokemon){
    const response = await axios.get (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    return response
}

function procuraPokemon(){
    return readline.question('Digite o nome de um pokemon:')
}

start()