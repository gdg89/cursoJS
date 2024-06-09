const mysql = require('mysql2/promise')

const initializeConnection = async function () {
    let connection;
    try{
        connection = await mysql.createConnection({
            host: "localhost",//'mysql_cursos',
            user: 'root',
            password: 'senha',
            database: 'db',
            port:3354//3306
        })
        console.log('Successful DB connection')
        return connection
    }catch(error){
        console.error("Error DB connection: ", error)
        throw error
    }

}

module.exports = initializeConnection
