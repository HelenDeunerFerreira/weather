import axios from 'axios'

export const getCitys = (codigoCidade) => {

    //cidades: carazinho, erechim, marau, passo fundo, soledade
    //codigos = [4304705, 4307005, 4311809, 4314100, 4320800]

    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${codigoCidade}`)
            resolve(response.data)
            console.log(resolve.data)
        } catch (error) {
            reject("Ops, algo deu errado!")
        }

    })
}