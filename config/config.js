var config;
if (process.env.NODE_ENV === 'production') {
    console.log("Load productionConfig...");
    config = {
        database: 'wlog', // 使用哪个数据库
        username: 'root', // 用户名
        password: 'root', // 口令
        host: 'localhost', // 主机名
        port: 3306 // 端口号，MySQL默认3306
    };
} else {
    console.log("Load localConfig...");
    config = {
        database: 'wlog', // 使用哪个数据库
        username: 'root', // 用户名
        password: 'root', // 口令
        host: 'localhost', // 主机名
        port: 3306 // 端口号，MySQL默认3306
    };
}

module.exports = config;