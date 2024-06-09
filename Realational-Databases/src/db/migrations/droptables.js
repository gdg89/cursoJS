const initializeConnection = require("../db-config")

async function dropAllTables() {
    const connection = await initializeConnection()
    const DB_TABLES = [
        "profiles",
        "users_roles",
        "roles",
        "users",
    ]

    try {
        const [tables] = await connection.query(
            "SELECT table_name FROM information_schema.tables WHERE table_schema = 'db'"
        )
        console.log(tables)
        if(tables.length === 0){
            console.log('No tables found in the DB.')
        }

        for(const table of tables.reverse()){
           await connection.query(`DROP TABLE ${table.TABLE_NAME}`)
        
        }
        console.log("All tables have been successfully deleted.")
    } catch (error) {
        console.log('Error droping tables: ', error)
    }finally {
        await connection.end()
        console.log("DB conection closed successfully.")
    }
}

dropAllTables()