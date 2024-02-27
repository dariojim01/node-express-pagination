const express = require('express');

let router= express.Router();

const axios = require('axios');
const apiURL= 'https://jsonplaceholder.typicode.com/users';

router.get('/elements', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 5;
        const page= parseInt(req.query.page) || 2;

        const start= (page-1)*limit;

        const end= page*limit;

        
        const elements= await axios.get(apiURL, {
            params: {
                _start: start, // Posición de inicio
                _end: end // Límite de elementos por página
            }
        });
        const totalElements = elements.headers['x-total-count'];
        const totalPages = Math.ceil(totalElements / limit);

        res.json({
            paginas: page, 
            limite: limit,
            totalElementos: totalElements,
            totalPaginas: totalPages,
            elementos: elements.data
        });
 
       
    } catch (error) {
        res.status(500).json({error: 'Error give api extern'});
    }
    
});

module.exports = {router};
