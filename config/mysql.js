const mysql = require('mysql')
const config = require('./config')

let pool = mysql.createPool({
    'host': config.host,
    'port': config.port,
    'user': config.username,
    'password': config.password,
    'database': config.database
})

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                console.log("Get connection from mysql pool failed !")
                reject(error)
            }
            connection.query(sql, values, (error, rows) => {
                if (error) {
                    console.log('Execute query error !')
                    reject(error)
                } else {
                    resolve(rows)
                }
            });
            connection.release();
        });
    });
};

module.exports = query