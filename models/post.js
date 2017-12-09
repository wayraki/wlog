const mysql = require('../config/mysql');

let findAll = () => {
    let _sql = 'SELECT * FROM post'
    return mysql(_sql)
}

let findById = (value) => {
    let _sql = 'SELECT * FROM post WHERE id = ?'
    return mysql(_sql, value)
}

let create = (value) => {
    let _sql = 'INSERT INTO post ( title, content,created_date ) VALUES ( ?,?, NOW())'
    return mysql(_sql, value);
}

let update = (value) => {
    let _sql = 'UPDATE post SET title = ?, content = ? WHERE id = ?'
    return mysql(_sql, value)
}

let destroy = (value) => {
    let _sql = 'DELETE FROM post WHERE id = ?'
    return mysql(_sql, value)
}

module.exports = { findAll, findById, create, update, destroy }
