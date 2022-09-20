const mysql = require('mysql');
const moniker = require('moniker');
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)

    const name = moniker.choose();
    connection.query(`INSERT INTO people(name) values('${name}')`)

    const query = `SELECT * FROM people`

    connection.query(query, (err, results) => {
        if(err) throw err

        let body = '<h1>Full Cycle Rocks!</h1>'
        body += '<ul>'
        results.forEach(person => {
            body += `<li>${person.name}</li>`
        })

        body += '</ul>'
        res.send(body)
    })

    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
