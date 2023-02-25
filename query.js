const pool = require("./config.js");
// console.log(pool);
const express = require("express");
const router = express.Router();

// MENAMPULKAN SEMUA LIST FILM
router.get("/film", (req, res) => {

    const query = `
        SELECT * FROM film
    `
    pool.query(query, (err,response) => {
        if(err) throw err

        res.status(200).json(response.rows)
    })
})

// MENAMPILKAN DATA FLM BERDASARKAN ID

router.get("/film/:id", (req, res) => {
   
    const {id} = req.params;

    const findQuery = `
    SELECT 
    *
    FROM film
        WHERE film_id = $1 
    `

    pool.query(findQuery, [id], (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows[0])
    })

})

// MENAMPILKAN DATA  LIST CATEGORY

router.get("/category", (req,res) =>{

    const findQuery =`
    SELECT * FROM category;
`

    pool.query(findQuery, (err, response) =>{
        if(err) throw err

        res.status(200).json(response.rows)
    })
})

// Menampilkan data list film berdasarkan category

router.get("/category/:id", (req, res) => {
   
    const {id} = req.params;

    const findQuery = `
    SELECT 
    *
    FROM category
        WHERE category_id = $1 
    `

    pool.query(findQuery, [id], (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows[0])
    })

})


module.exports = router;