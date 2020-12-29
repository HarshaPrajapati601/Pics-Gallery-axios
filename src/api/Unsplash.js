import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID Ya9yyzYLimaiz4C9PWUhjjGc3nGePkZ5DpakOtPeubc'
    }

})