const mssql = require('mssql');

const connect = {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database,
    port: process.env.port
}

async function connectDB(){
    try {
        const connection = await new mssql.ConnectionPool(connect)

        connection.connect(err => {
            console.log('Error connect database -> ' + err)
        })

        return connection;
    } catch (err) {
        console.log('Error connect database -> ' + err)
    }
}

module.exports = {
    connectDB
}