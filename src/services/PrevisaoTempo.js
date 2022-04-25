import axios from 'axios'

export const getCitys = () => {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${4304705}`)
            resolve(response.data)
        } catch (error) {
            reject("Ops, algo deu errado!")
        }

    })

    //cidades: carazinho, erechim, marau, passo fundo, soledade
    // let listaCodigos = [4304705, 4307005, 4311809, 4314100, 4320800]

    // listaCodigos.forEach(codigo => {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${4304705}`)
    //             resolve(response.data.results)
    //         } catch (error) {
    //             reject("Ops, algo deu errado!")
    //         }

    //     })
    // });

}