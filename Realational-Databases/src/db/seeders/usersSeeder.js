const initializeConnection = require("../db-config")
const fs = require("fs").promises
const path = require("path")

async function seedDatabase() {
    const connection = await initializeConnection()
    const seedsFile = path.resolve(__dirname, "../users-seeds.json")

    try {
        const jsonData = await readJSONFile(seedsFile)
        const sql = "INSERT INTO users (first_name, last_name,email, password_hash, created_at) VALUEs ?"
        const values = jsonData.map(item => [item.first_name, item.last_name, item.email, item.password_hash, item.created_at])

        await connection.query(sql, [values])

        console.log("Seeds execute successfully.")
    } catch (error) {
        console.log(error)
    } finally {
        if (connection) {
            try {
                await connection.end()
                console.log("DB connection closed successfully.")
            } catch (error) {
                console.error("Error closing the DB connection: ", error)
            }
        }
    }
}

async function readJSONFile(filename) {
    try {
        const data = await fs.readFile(filename, 'utf-8')
        const jsonData = JSON.parse(data)
        return jsonData
    } catch (error) {
        console.error("Error parsing JSON file: ", error)
    }
}

seedDatabase()