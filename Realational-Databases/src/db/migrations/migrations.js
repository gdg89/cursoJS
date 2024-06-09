const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const initializeConnection = require('../db-config');

async function executeSQLfiles() {
    const connection = await initializeConnection()

    try{
        const basePath = path.resolve(__dirname, '../../DDL')

        const sqlFiles = [
            'create_users_table.sql', 
            'create_roles_table.sql',
            'create_users_roles_table.sql', 
            'create_profiles_table.sql'
        ]

        const absoluteSqlFiles = sqlFiles.map(file => path.join(basePath, file))

        for(const file of absoluteSqlFiles) {
            const sql = fs.readFileSync(file, 'utf-8')
            await connection.execute(sql)
        }
        console.log(`Migrations executed successfully.`)
    } catch (error) {
        console.error('Error executing SQL files: ', error)
    } finally {
        await connection.end();
        console.log("DB conection closed successfully.")
    }
}
executeSQLfiles()