const mysql = require('mysql2/promise');
const fs = require('fs');

async function executeSQLfiles() {
    const connection = await mysql.createConnection({
        host: 'mysql_cursos',
        user: 'root',
        password: 'senha',
        database: 'db',
        port:3306
    });

    try{
        const sqlFiles = ['./sql/DDL/create_users_table.sql', './sql/DDL/create_roles_table.sql', './sql/DDL/create_users_roles_table.sql', './sql/DDL/create_profiles_table.sql']

        for(const file of sqlFiles) {
            const sql = fs.readFileSync(file, 'utf-8')
            await connection.execute(sql)
            console.log(`File ${file} executed successfully.`)
        }
    } catch (error) {
        console.error('Error executing SQL files: ', error)
    } finally {
        await connection.end();
    }
}
executeSQLfiles()