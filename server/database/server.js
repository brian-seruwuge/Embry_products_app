require('dotenv').config()

const Pool = require('pg').Pool

const isProduction = process.env.NODE_ENV === 'production'
const origin = {
    origin: isProduction ? 'https://www.embry-products.com' : '*',
}

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
})


// read 
function getItems(request, response) {
    pool.query('SELECT * FROM embry', (err, res) => {
        if (err) {
            throw err
        } else {
            response.status(200).json(res.rows)
                // console.log(res.rows)
        }

    })
}

// delete item
function deleteItem(request, response) {
    const id = parseInt(request.params.id) // params refers to the dynamic value

    pool.query('DELETE FROM embry WHERE id = $1', [id], (err, res) => {
        if (err) {
            throw err
        }
        response.status(200).send(`item with id ${id} deleted`)
    })

}

// Add item
function addItem(request, response) {
    const { products, number, size } = request.body
    pool.query('INSERT INTO embry(products, number, size) VALUES($1, $2, $3)', [products, number, size], (err, res) => {
        if (err) {
            throw err
        }
        response.status(200).send(`item added successfully`)
    })

}

// update item
function updateItem(request, response) {
    const id = parseInt(request.params.id)
    const { products, number, size } = request.body
    pool.query('UPDATE embry SET products=$1, number=$2, size=$3 WHERE id=$4', [products, number, size, id], (err, res) => {
        if (err) {
            throw err
        }
        response.status(200).send(`item with id ${id} updated`)
    })
}


module.exports = {
    getItems,
    deleteItem,
    addItem,
    updateItem

}