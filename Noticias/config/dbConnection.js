var mysql = require('mysql'); //chama o banco de dados mysql

var ConnectMySql = function(){
    console.log("Conexão com Banco bd foi estabelecida");
    return mysql.createConnection({ //faz a conexão com o banco de dados
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'portal_noticias'
    });

};

module.exports = function(){
    console.log("O autoload carregou o modulo BD");
    return ConnectMySql;
}
