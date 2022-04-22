import axios from 'axios'

export const getCitys = () => {

    //cidades: carazinho, erechim, marau, passo fundo, soledade
    let listaCodigos = [4304705, 4307005, 4311809, 4314100, 4320800]

    listaCodigos.forEach(codigo => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get(`https://randomuser.me/api/?results=${codigo}`)
                resolve(response.data.results)
            } catch (error) {
                reject("Ops, algo deu errado!")
            }

        })
    });

}